import Cookies from 'js-cookie';

class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    this.setHeadersToken(Cookies.get('Authorization'));
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

  setHeadersToken(value) {
    this.setHeaders('Authorization', value);
  }

  setHeaders(key, value) {
    this.headers.set(key, value);
  }
}

export default new Api();
