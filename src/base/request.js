import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a';
import { sha256 } from 'js-sha256';
import session from './session';
import messaging from './messaging';

export const { apiBaseUrl } = session;

axios.defaults.baseURL = apiBaseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

let axiosInstance = null;

const getAxiosInstance = (forceNewInstance = false) => {
  if (forceNewInstance || !axiosInstance) axiosInstance = axios.create();

  if (session.isAuthenticate) {
    const { token, secret } = session.currentAccount;

    addOAuthInterceptor(axiosInstance, {
      key: token, secret, algorithm: 'HMAC-SHA256',
    });
  }

  return axiosInstance;
};

const isObject = (obj) => Object.prototype.toString.call(obj).indexOf('Object') !== -1;

const fixNullQueryParams = (requestData) => {
  Object.keys(requestData).forEach((key) => {
    if (isObject(requestData[key])) {
      requestData[key] = fixNullQueryParams(requestData[key]);
    } else if (requestData[key] === undefined || requestData[key] === null) {
      requestData[key] = '';
    }
  });
  return requestData;
};

export function toQueryParams(requestData) {
  const qs = [];
  const add = (key, value) => {
    let v = typeof value === 'function' ? value() : value;
    v = v === null || v === undefined ? '' : v;
    qs[qs.length] = `${encodeURIComponent(key)}=${encodeURIComponent(v)}`;
  };

  const buildParams = (prefix, data) => {
    if (prefix) {
      if (Array.isArray(data)) {
        data.forEach((item, idx) => {
          buildParams(`${prefix}[${isObject(item[idx]) && item[idx] ? idx : ''}]`, item[idx]);
        });
      } else if (isObject(data)) {
        Object.keys(data).forEach((key) => buildParams(`${prefix}[${key}]`, data[key]));
      } else {
        add(prefix, data);
      }
    } else if (Array.isArray(data)) {
      data.forEach((item) => add(item.name, item.value));
    } else {
      Object.keys(data).forEach((key) => buildParams(key, data[key]));
    }
    return qs;
  };

  return buildParams('', requestData).join('&');
}

export function signRequest(method, path, data) {
  const { token, secret } = session.currentAccount;
  const requestData = { ...data, token };

  let queryString;
  let body;

  // Add timestamp to requestData.
  requestData.timestamp = Date.now();

  if (method.match(/^(GET|HEAD)$/)) {
    fixNullQueryParams(requestData);
    queryString = decodeURIComponent(toQueryParams(requestData));
    body = '';
  } else {
    queryString = '';
    body = JSON.stringify(requestData);
  }

  const msg = path + queryString + body;

  // Generate the corresponding hmac parameter using the js-sha256 or similar library.
  requestData.hmac = sha256.hmac.update(secret, msg).hex();

  return requestData;
}

export function authWithAuthCode(authCode) {
  const options = {
    url: 'get_access_token',
    method: 'POST',
    data: { code: authCode },
  };

  messaging.emitMessage('notify', 'waitFortAuthToken');
  messaging.emitMessage('start', null, 'waiting');

  request(options).then((account) => {
    messaging.emitMessage('setSessionAccount', account);
  }).catch((error) => {
    messaging.emitMessage('notify', error);
  }).finally(() => {
    messaging.emitMessage('release', null, 'waiting');
  });
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export function request(options = {}, forceNewInstance = false) {
  axiosInstance = getAxiosInstance(forceNewInstance);

  options.headers = { 'Content-Type': 'application/json', ...options.headers };

  return axiosInstance(options)
    .then((response) => response.data)
    .catch((err) => {
      throw Error(err.response ? err.response.data.message : err.message);
    });
}
