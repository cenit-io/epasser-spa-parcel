import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a';

axios.defaults.baseURL = `${process.env.eCAPI_BASE_URL}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

let axiosInstance = null;
let dataCredentials = null;

function authenticate() {
  const authRequest = axios.create();
  const config = {
    url: `${process.env.eCAPI_BASE_URL}/oauth/token`,
    method: 'POST',
    data: dataCredentials,
  };

  return authRequest(config).then((response) => {
    const { client_id: clientId, client_secret: clientSecret } = dataCredentials;

    dataCredentials = {
      grant_type: 'refresh_token',
      refresh_token: response.data.refresh_token,
      client_id: clientId,
      client_secret: clientSecret,
    };
    return response.data;
  });
}

function getAxiosInstance(forceNewInstance = false, newDataCredentials = false) {
  if (forceNewInstance || !axiosInstance) axiosInstance = axios.create();

  if (newDataCredentials) {
    dataCredentials = newDataCredentials;
    const { token, secret } = dataCredentials

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
      throw err.response ? err.response.data.message : err.message;
    });
}
