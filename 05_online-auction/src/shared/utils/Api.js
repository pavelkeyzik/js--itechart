import Cookies from 'js-cookie';
import config from '@/config';

class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    if(Cookies.getJSON(config.userInfo)) {
      this.setHeadersToken(Cookies.getJSON(config.userInfo).token);
    }
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

  removeLote(id) {
    return this._delete(`/api/bids/remove-bid/${id}`)
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
        [config.keyForSaveToken]: Cookies.getJSON(config.userInfo).token,
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

  _delete(path) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
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
