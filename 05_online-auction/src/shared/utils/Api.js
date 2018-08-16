import Cookies from 'js-cookie';
import config from '@/config';

class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    this.setHeadersToken(Cookies.get(config.keyForSaveToken));
  }

  login(data) {
    return fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });
  }

  registration(data) {
    return fetch(`${this.baseURL}/auth/registration`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });
  }

  getBids() {
    return this._get('/api/bids');
  }

  _get(path) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: this.headers,
    });
  }

  setHeadersToken(value) {
    this.setHeaders(config.keyForSaveToken, value);
  }

  setHeaders(key, value) {
    this.headers.set(key, value);
  }
}

export default new Api();
