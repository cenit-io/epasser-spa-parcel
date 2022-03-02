import LZString from 'lz-string';

class Local {
  get(key, defaultValue) {
    const item = window.localStorage.getItem(key);

    return (item === null) ? defaultValue : JSON.parse(LZString.decompress(item));
  }

  set(key, value) {
    try {
      window.localStorage.setItem(key, LZString.compress(JSON.stringify(value)));
    } catch (e) {
      window.localStorage.clear();
    }
  }

  del(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}

const local = new Local();

export default local;
