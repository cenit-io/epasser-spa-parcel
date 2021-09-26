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
    this._subscritions = [];
    this.state = {};
  }

  addMessagingListener(messageId, callBack, namespace) {
    const subscription = messaging.addMessagingListener(messageId, callBack, namespace);
    this._subscritions.push(subscription);

    return subscription;
  }

  emitMessage(messageId, data, namespace) {
    messaging.emitMessage(messageId, data, namespace);
  }

  componentWillUnmount = () => {
    this._subscritions.forEach(subscription => messaging.delMessagingListener(subscription));
    this._subscritions = null;
  }
}