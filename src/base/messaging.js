import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();

/* eslint no-param-reassign: ["off"] */
class Messaging {
  addMessagingListener(messageId, callBack, senderId) {
    messageId = `${senderId || 'Global'}/${messageId}`;

    const subscription = emitter.addListener(messageId, callBack);

    return subscription;
  }

  emitMessage(messageId, data, senderId, timeout) {
    messageId = `${senderId || 'Global'}/${messageId}`;
    data = data instanceof Array ? data : [data];

    if (timeout !== undefined) {
      setTimeout(() => emitter.emit(messageId, ...data), timeout);
    } else {
      emitter.emit(messageId, ...data);
    }
  }

  delMessagingListener(subscription) {
    subscription.remove();
  }
}

const messaging = new Messaging();

export default messaging;
