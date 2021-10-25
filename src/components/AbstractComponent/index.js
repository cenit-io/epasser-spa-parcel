/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import messaging from '../../base/messaging';

export default class AbstractComponent extends React.Component {

  constructor(props) {
    super(props);
    this._subscriptions = [];
    this.state = {};
  }

  get componentId() {
    if (this._componentId) return this._componentId;
    if (this.props.id) return this.props.id;
    if (this.constructor.id) return this.constructor.id;

    if (this.constructor._instancesCount === undefined) this.constructor._instancesCount = 1;
    this._componentId = `${this.constructor.name}-${this.constructor._instancesCount++}`;
  }

  get moduleId() {
    return this.props.moduleId;
  }

  get apiPath() {
    return this.constructor.apiPath
  }

  addMessagingListener(messageId, callBack, senderId) {
    const subscription = messaging.addMessagingListener(messageId, callBack, senderId || this.moduleId);
    this._subscriptions.push(subscription);

    return subscription;
  }

  emitMessage = (messageId, data, senderId, timeout) => {
    messaging.emitMessage(messageId, data, senderId || this.moduleId, timeout);
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
    this.emitMessage('notify', message)
  }

  componentWillUnmount = () => {
    this._subscriptions.forEach(subscription => messaging.delMessagingListener(subscription));
    this._subscriptions = null;
  }
}