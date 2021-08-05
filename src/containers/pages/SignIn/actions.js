/*
 *
 * SignIn actions
 *
 */

import {
  AUTHENTICATE_WITH_AUTH_CODE,
  SET_ACCOUNT_INFO,
} from './constants';

export function doAuthenticateWithAuthCode(authCode) {
  return {
    type: AUTHENTICATE_WITH_AUTH_CODE,
    authCode,
  };
}

export function doSetAccountInfo(account) {
  return {
    type: SET_ACCOUNT_INFO,
    account,
  };
}
