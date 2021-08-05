/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_ACCOUNT_INFO } from './constants';

export const initialState = fromJS({
  account: null,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_INFO:
      return state.set('account', action.account);
    default:
      return state;
  }
}

export default signInReducer;
