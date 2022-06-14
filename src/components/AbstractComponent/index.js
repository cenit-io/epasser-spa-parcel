/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';
import { request } from '../../base/request';

import messaging from '../../base/messaging';
import session from '../../base/session';

export default class AbstractComponent extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    moduleId: PropTypes.string,
    messages: PropTypes.instanceOf(Object),
  }

  static defaultProps = { id: null, moduleId: null, messages: null }

  constructor(props) {
    super(props);
    this._subscriptions = [];
    this.state = {};
  }

  get messages() {
    const { messages } = this.props;
    return messages || this.constructor.messages || {};
  }

  get componentId() {
    const { id: propId } = this.props;

    if (this._componentId) return this._componentId;
    if (propId) return propId;

    this._componentId = this.constructor.id || uuid();

    return this._componentId;
  }

  get moduleId() {
    const { moduleId } = this.props;
    return moduleId || this.componentId;
  }

  get apiPath() {
    return this.constructor.apiPath;
  }

  get iFrameDetected() {
    return window !== window.parent;
  }

  get mainModuleId() {
    return this.iFrameDetected ? 'MainPage' : 'MainTabs';
  }

  addMessagingListener = (messageId, callBack, senderId) => {
    const subscription = messaging.addMessagingListener(messageId, callBack, senderId || this.moduleId);
    this._subscriptions.push(subscription);

    return subscription;
  }

  setMessagingListener = (messageId, callBack, senderId) => {
    const eventType = messaging.getEventType(messageId, senderId || this.moduleId);

    this._subscriptions.forEach((subscription) => {
      if (subscription.eventType === eventType) messaging.delMessagingListener(subscription);
    });

    return this.addMessagingListener(messageId, callBack, senderId);
  }

  emitMessage = (messageId, data, senderId, timeout) => {
    messaging.emitMessage(messageId, data, senderId || this.moduleId, timeout);
  }

  componentWillUnmount = () => {
    this._subscriptions.forEach((subscription) => messaging.delMessagingListener(subscription));
    this._subscriptions = null;
  }

  onConfirmedOpenTasksModule = (value, done) => {
    if (value) this.emitMessage('openModule', 'Tasks', this.mainModuleId);
    done();
  }

  isAccessible(moduleId) {
    const { is_ready: isReady } = session.currentAccount || {};

    return !!(isReady || moduleId.match(/^(Home|Tasks|AvailableIntegrations|Tenants|Themes)$/));
  }

  openTasksModule(done) {
    const data = [this.confirmOpenTasksModuleMsg, (value) => this.onConfirmedOpenTasksModule(value, done)];
    this.emitMessage('confirm', data, 'main');
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  sendRequest(options) {
    this.startWaiting(0);

    const skipNotify = options.skipNotify === true;
    const skipOpenTasksModule = options.skipOpenTasksModule === true;
    const { successfulMessage } = options;

    delete options.skipNotify;
    delete options.skipOpenTasksModule;
    delete options.successfulMessage;

    return request(options).then(async (response) => {
      if (successfulMessage) this.notify(successfulMessage);

      if (response.type === 'task' && !skipOpenTasksModule) {
        await new Promise((done) => {
          this.releaseWaiting();
          this.openTasksModule(done);
        });
      }
      return response;
    }).catch((error) => {
      if (!skipNotify) this.notify(error);
      throw error;
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  startWaiting(timeout) {
    this.emitMessage('lockActions', true, null, timeout);
    this.emitMessage('start', null, 'waiting', timeout);
  }

  releaseWaiting() {
    this.emitMessage('lockActions', false);
    this.emitMessage('release', null, 'waiting');
  }

  /* eslint no-param-reassign: ["off"] */
  notify(message, severity) {
    if (typeof message === 'string') {
      if (!severity) {
        const match = message.match(/^(success|warning|info)/);
        match && ({ 1: severity } = match);
      }

      message = { message };
    }
    if (typeof severity === 'string') message.severity = severity;

    this.emitMessage('notify', message);
  }
}
