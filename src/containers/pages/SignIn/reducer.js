/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_ACCOUNT_INFO } from './constants';

import session from '../../../base/session';

export const initialState = fromJS({
  account: null,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_INFO:
      session.set('account', action.account);
      return state.set('account', action.account);
    default:
      return state;
  }
}

export default signInReducer;
