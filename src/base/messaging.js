import { EventEmitter } from 'fbemitter';

const _messaging = new EventEmitter();

class Messaging {
  addMessagingListener(messageId, callBack, senderId) {
    messageId = `${senderId || 'Global'}/${messageId}`;

    const subscription = _messaging.addListener(messageId, callBack);

    return subscription;
  }

  emitMessage(messageId, data, senderId, timeout) {
    messageId = `${senderId || 'Global'}/${messageId}`;
    data = data instanceof Array ? data : [data];

    if (timeout !== undefined) {
      setTimeout(() => _messaging.emit(messageId, ...data), timeout);
    } else {
      _messaging.emit(messageId, ...data);
    }
  }

  delMessagingListener(subscription) {
    subscription.remove();
  }
}

const messaging = new Messaging();

export default messaging;