/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';
import { FormattedMessage } from 'react-intl';
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

  get moduleBaseId() {
    return this.moduleId.split('/')[0];
  }

  get apiPath() {
    return this.constructor.apiPath;
  }

  get mainModuleId() {
    return session.iFrameDetected ? 'MainPage' : 'MainTabs';
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
    done(value);
  }

  translate(msg) {
    // eslint-disable-next-line no-param-reassign
    if (typeof msg === 'string' && this.messages[msg]) msg = this.messages[msg];
    if (typeof msg === 'string' || React.isValidElement(msg)) return msg;

    return <FormattedMessage {...msg} />;
  }

  isAccessible(moduleId) {
    // TODO: Check if current tenant has access to the given module.
    return true;
  }

  isTaskResponse(response) {
    return response.task && response.task.status;
  }

  openTasksModule(done) {
    const confirmMsg = this.translate('confirm_open_tasks_module_msg');
    const data = [confirmMsg, (value) => this.onConfirmedOpenTasksModule(value, done)];
    this.emitMessage('confirm', data, this.mainModuleId);
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
      if (this.isTaskResponse(response) && !skipOpenTasksModule) {
        this.notify('warning_task_creation');
        await new Promise((done) => {
          this.releaseWaiting();
          this.openTasksModule(done);
        });
      } else if (successfulMessage) {
        this.notify(successfulMessage);
      }

      return response;
    }).catch((error) => {
      if (!skipNotify) this.notify(error);
      throw error;
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  loadItemId(dataTypeName, criteria) {
    const options = {
      url: `setup/${dataTypeName}`,
      method: 'GET',
      // params: { ...criteria, only: 'id', limit: 1 },
      headers: {
        'X-Query-Selector': JSON.stringify(criteria),
        'X-Query-Options': JSON.stringify({ limit: 1 }),
        'X-Template-Options': JSON.stringify({ only: 'id' }),
      },
    };

    return this.sendRequest(options).then((response) => ((response.count !== 0) ? response.items[0].id : null));
  }

  loadDataTypeId(name, namespace = 'Setup') {
    if (name.match(/::/)) [namespace, name] = name.split('::');

    return this.loadItemId('cenit_data_type', { namespace, name });
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
