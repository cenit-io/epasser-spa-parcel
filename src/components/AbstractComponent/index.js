/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import messaging from '../../base/messaging';

export default class AbstractComponent extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    moduleId: PropTypes.string,
  }

  static defaultProps = { id: null, moduleId: null }

  constructor(props) {
    super(props);
    this._subscriptions = [];
    this.state = {};
  }

  get componentId() {
    const { id: propId } = this.props;

    if (this._componentId) return this._componentId;
    if (propId) return propId;
    if (this.constructor.id) return this.constructor.id;

    if (this.constructor._instancesCount === undefined) this.constructor._instancesCount = 1;
    this._componentId = `${this.constructor.name}-${this.constructor._instancesCount}`;
    this.constructor._instancesCount += 1;

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
