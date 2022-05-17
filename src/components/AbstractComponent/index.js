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
    return moduleId;
  }

  get apiPath() {
    return this.constructor.apiPath;
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

  onOpenTasksModule = () => {
    const data = [this.confirmOpenTasksModuleMsg, (value) => this.onConfirmedOpenTasksModule(value)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedOpenTasksModule = (value) => {
    if (value) this.emitMessage('openModule', 'Tasks', 'MainTabs');
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  sendRequest = (options) => {
    this.startWaiting(0);

    const skipNotify = options.skipNotify === true;
    const skipOpenTasksModule = options.skipOpenTasksModule === true;
    delete options.skipNotify;
    delete options.skipOpenTasksModule;

    return request(options).then((response) => {
      if (response.type === 'task' && !skipOpenTasksModule) this.onOpenTasksModule();
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

  notify(message) {
    this.emitMessage('notify', message);
  }
}
