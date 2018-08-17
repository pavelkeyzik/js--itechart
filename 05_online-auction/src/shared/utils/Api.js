import Cookies from 'js-cookie';
import config from '@/config';

class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.headers = new Headers({
      'Accept': 'application/json',
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

  getPersonalInfo() {
    return this._get('/api/users/personal-info');
  }

  addNewLote(data) {
    return this._post('/api/bids', data);
  }

  _get(path) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: this.headers,
    });
  }

  _post(path, body) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: this.headers,
      body,
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
