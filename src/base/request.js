import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a';
import session from './session';
import { sha256 } from 'js-sha256';

export const baseUrl = session.baseUrl;

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

let axiosInstance = null;

const getAxiosInstance = (forceNewInstance = false) => {
  if (forceNewInstance || !axiosInstance) axiosInstance = axios.create();

  if (session.isAuthenticate) {
    const { token, secret } = session.currentAccount

    addOAuthInterceptor(axiosInstance, { key: token, secret: secret, algorithm: "HMAC-SHA256" });
  }

  return axiosInstance;
}

const isObject = (obj) => Object.prototype.toString.call(obj).indexOf('Object') !== -1;

const fixNullQueryParams = (requestData) => {
  for (const key in requestData) {
    if (isObject(requestData[key])) {
      requestData[key] = fixNullQueryParams(requestData[key])
    } else if (requestData[key] === undefined || requestData[key] === null) {
      requestData[key] = ''
    }
  }

  return requestData;
}

export function toQueryParams(requestData) {
  let qs = [],
    add = function (k, v) {
      v = typeof v === 'function' ? v() : v;
      v = v === null ? '' : v === undefined ? '' : v;
      qs[qs.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    },

    buildParams = function (prefix, obj) {
      let i, len, key;

      if (prefix) {
        if (Array.isArray(obj)) {
          for (i = 0, len = obj.length; i < len; i++) {
            buildParams(
              prefix + '[' + (isObject(obj[i]) && obj[i] ? i : '') + ']',
              obj[i]
            );
          }
        } else if (isObject(obj)) {
          for (key in obj) buildParams(prefix + '[' + key + ']', obj[key]);
        } else {
          add(prefix, obj);
        }
      } else if (Array.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) add(obj[i].name, obj[i].value);
      } else {
        for (key in obj) buildParams(key, obj[key]);
      }
      return qs;
    };

  return buildParams('', requestData).join('&');
}

export function signRequest(method, path, requestData) {
  const { token, secret } = session.currentAccount;
  let queryString, body;

  requestData = { ...requestData, token };

  // Add timestamp to requestData.
  requestData.timestamp = Date.now();

  if (method.match(/^(GET|HEAD)$/)) {
    fixNullQueryParams(requestData)
    queryString = decodeURIComponent(toQueryParams(requestData));
    body = '';
  } else {
    queryString = '';
    body = JSON.stringify(requestData);
  }

  let msg = path + queryString + body

  // Generate the corresponding hmac parameter using the js-sha256 or similar library.
  requestData.hmac = sha256.hmac.update(secret, msg).hex();

  return requestData;
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export function request(options = {}, forceNewInstance = false) {
  axiosInstance = getAxiosInstance(forceNewInstance);

  options.headers = { 'Content-Type': 'application/json', ...options.headers };

  return axiosInstance(options)
    .then((response) => response.data)
    .catch((err, response) => {
      throw Error(err.response ? err.response.data.message : err.message);
    });
}
