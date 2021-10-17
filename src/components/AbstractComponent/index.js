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

  get moduleId() {
    return this.props.moduleId;
  }

  addMessagingListener(messageId, callBack, senderId) {
    const subscription = messaging.addMessagingListener(messageId, callBack, senderId || this.moduleId);
    this._subscriptions.push(subscription);

    return subscription;
  }

  emitMessage = (messageId, data, senderId, timeout) => {
    messaging.emitMessage(messageId, data, senderId || this.moduleId, timeout);
  }

  startWaiting() {
    this.emitMessage('lockActions', true);
    this.emitMessage('start', null, 'waiting');
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