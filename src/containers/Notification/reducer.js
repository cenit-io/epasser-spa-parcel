/*
 *
 * Notification reducer
 *
 */

import { fromJS } from 'immutable';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './constants';

export const initialState = fromJS({ message: null, severity: null });

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return state.set('message', action.message).set('severity', action.severity);
    case HIDE_NOTIFICATION:
      return state.set('message', null).set('severity', null);
    default:
      return state;
  }
}

export default notificationReducer;
