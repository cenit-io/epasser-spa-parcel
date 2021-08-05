/*
 *
 * Notification actions
 *
 */

import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './constants';

export function doShowNotification(message, severity) {
  return {
    type: SHOW_NOTIFICATION, message, severity,
  };
}

export function doHideNotification() {
  return { type: HIDE_NOTIFICATION };
}
