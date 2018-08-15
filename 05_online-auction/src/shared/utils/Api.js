class Api {
  constructor() {
    this.baseURL = 'http://localhost:3000';
  }

  login(data) {
    return fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}

export default new Api();
