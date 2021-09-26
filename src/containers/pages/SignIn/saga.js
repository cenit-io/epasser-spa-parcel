import { call, put, takeLatest } from 'redux-saga/effects';
import { doSetAccountInfo } from './actions';
import { request } from '../../../base/request';
import { doStartWaiting, doReleaseWaiting } from '../../Waiting/actions';
import { AUTHENTICATE_WITH_AUTH_CODE, } from './constants';
import { history } from "../../../base/history";

import messaging from '../../../base/messaging';

export function* doAuthenticateWithAuthCode(action) {
  try {
    const options = {
      url: 'get_access_token',
      method: 'POST',
      data: { code: action.authCode },
    };

    yield call(messaging.emitMessage, 'notify', 'waitFortAuthToken');
    yield put(doStartWaiting());
    const response = yield call(request, options);
    yield put(doSetAccountInfo(response.data));
    yield call(history.replace, '/');
  } catch (error) {
    yield call(messaging.emitMessage, 'notify', error);
  } finally {
    yield put(doReleaseWaiting());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signInSaga() {
  yield takeLatest(AUTHENTICATE_WITH_AUTH_CODE, doAuthenticateWithAuthCode);
}