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

  addMessagingListener(messageId, callBack, moduleId) {
    const subscription = messaging.addMessagingListener(messageId, callBack, moduleId);
    this._subscritions.push(subscription);

    return subscription;
  }

  emitMessage(messageId, data, moduleId) {
    messaging.emitMessage(messageId, data, moduleId);
  }

  componentWillUnmount = () => {
    this._subscritions.forEach(subscription => messaging.delMessagingListener(subscription));
    this._subscritions = null;
  }
}