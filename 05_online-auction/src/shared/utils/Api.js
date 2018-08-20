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

  getPersonalInfo() {
    return this._get('/api/users/personal-info');
  }

  addNewLote(data) {
    return this._postWithImage('/api/bids', data);
  }

  riseBid(id, percent) {
    switch(percent) {
      case 5:
        return this._post(`/api/bids/raise-five/${id}`); 
      case 10:
        return this._post(`/api/bids/raise-ten/${id}`); 
      case 20:
        return this._post(`/api/bids/raise-twenty/${id}`);
      default:
        return;
    }
  }

  _get(path) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: this.headers,
    });
  }

  _postWithImage(path, body) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization': Cookies.get(config.keyForSaveToken),
      }),
      body,
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
