/**
 *
 * AbstractComponent
 *
 */

import React from 'react';
import eventEmitter from '../../components/EventEmitter';

export default class AbstractComponent extends React.Component {

  constructor(props) {
    super(props);
    this._eventSubscritions = [];
    window.xx = this.constructor
  }

  on(eventType, callBack, namespace) {
    eventType = `${namespace || 'Global'}/${eventType}`;

    const subscription = eventEmitter.addListener(eventType, callBack);
    this._eventSubscritions.push(subscription);

    return subscription;
  }

  emit(eventType, data, namespace) {
    eventType = `${namespace || 'Global'}/${eventType}`;
    data = data instanceof Array ? data : [data];
    eventEmitter.emit(eventType, ...data);
  }

  componentWillUnmount = () => {
    this._eventSubscritions.forEach(subscription => subscription.remove());
  }
}