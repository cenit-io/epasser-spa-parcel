import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a';
import session from './session';

axios.defaults.baseURL = `${process.env.eCAPI_BASE_URL}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

let axiosInstance = null;

function getAxiosInstance(forceNewInstance = false) {
  if (forceNewInstance || !axiosInstance) axiosInstance = axios.create();

  if (session.isAuthenticate) {
    const { token, secret } = session.currentAccount

    addOAuthInterceptor(axiosInstance, { key: token, secret: secret, algorithm: "HMAC-SHA256" });
  }

  return axiosInstance;
}

export function authWithAuthCode(code, redirectUri) {
  axiosInstance = getAxiosInstance(true, {
    grant_type: 'authorization_code',
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    scope: 'read write',
    redirect_uri: redirectUri,
    code,
  });
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
