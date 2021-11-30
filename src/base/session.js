import LZString from 'lz-string'

class Session {
  get currentAccount() {
    return this.get('account');
  }

  get isAuthenticate() {
    return !!this.currentAccount;
  }

  get baseUrl(){
    let baseUrl = process.env.eCAPI_BASE_URL || 'https://cenit.io/app/ecapi-v1';

    return baseUrl;
  }

  get(key, defaultValue) {
    const item = window.sessionStorage.getItem(key);

    return (item === null) ? defaultValue : JSON.parse(LZString.decompress(item));
  }

  set(key, value) {
    try {
      window.sessionStorage.setItem(key, LZString.compress(JSON.stringify(value)));
    } catch ( e ) {
      window.sessionStorage.clear();
    }
  }
}

const session = new Session();

export default session;