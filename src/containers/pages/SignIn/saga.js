import { call, put, takeLatest } from 'redux-saga/effects';
import { doSetAccountInfo } from './actions';
import { doHideNotification, doShowNotification } from '../../Notification/actions';
import { request } from '../../../base/request';
import { doStartWaiting, doReleaseWaiting } from '../../Waiting/actions';
import {
  AUTHENTICATE_WITH_AUTH_CODE,
} from './constants';
import { history } from "../../../base/history";

export function* doAuthenticateWithAuthCode(action) {
  try {
    const options = {
      url: 'get_access_token',
      method: 'POST',
      data: { code: action.authCode },
    };

    yield put(doHideNotification());
    yield put(doShowNotification('waitFortAuthToken', 'info'));
    yield put(doStartWaiting());
    const response = yield call(request, options);
    yield put(doSetAccountInfo(response.data));
    yield call(history.replace, '/');
  } catch (error) {
    yield put(doShowNotification(error, 'error'));
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