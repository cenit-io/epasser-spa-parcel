/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import messaging from '../Messaging';

export default class AbstractComponent extends React.Component {

  constructor(props) {
    super(props);
    this._subscritions = [];
  }

  addMessagingListener(messageId, callBack, namespace) {
    messageId = `${namespace || 'Global'}/${messageId}`;

    const subscription = messaging.addListener(messageId, callBack);
    this._subscritions.push(subscription);

    return subscription;
  }

  emitMessage(messageId, data, namespace) {
    messageId = `${namespace || 'Global'}/${messageId}`;
    data = data instanceof Array ? data : [data];
    messaging.emit(messageId, ...data);
  }

  componentWillUnmount = () => {
    this._subscritions.forEach(subscription => subscription.remove());
  }
}