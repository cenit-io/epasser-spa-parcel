import { EventEmitter } from 'fbemitter';

const _messaging = new EventEmitter();

class Messaging {
  addMessagingListener(messageId, callBack, moduleId) {
    messageId = `${moduleId || 'Global'}/${messageId}`;

    const subscription = _messaging.addListener(messageId, callBack);

    return subscription;
  }

  emitMessage(messageId, data, moduleId) {
    messageId = `${moduleId || 'Global'}/${messageId}`;
    data = data instanceof Array ? data : [data];
    _messaging.emit(messageId, ...data);
  }

  delMessagingListener(subscription) {
    subscription.remove();
  }
}

const messaging = new Messaging();

export default messaging;