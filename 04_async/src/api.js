class Api {
  constructor() {
    this._siteURL = 'http://dataservice.accuweather.com/';
    this._apiKey = 'apikey=6siIQEQG3T15ZRWGdna9zv3sbsIIDHM0';
    this._searchCityURL = `${this._siteURL}locations/v1/cities/search?${this._apiKey}&q=`;
    this._searchWeatherURL = `${this._siteURL}forecasts/v1/daily/5day/`;
    
    this._lastSearchPromise;
  }

  get lastSearchPromise() {
    return this._lastSearchPromise;
  }

  set lastSearchPromise(newValue) {
    this._lastSearchPromise = newValue;
  }

  getInformationPromise(city) {
    this.lastSearchPromise = city;
    return this._search(city);
  }

  async getInformationAwait(city) {
    return await this._search(city);
  }

  _search(city) {
    return fetch(`${this._searchCityURL}${city}`)
      .then(res => res.json())
      .then(items => items[0].Key)
      .then(cityKey => fetch(`${this._searchWeatherURL}${cityKey}?${this._apiKey}`))
      .then(d => d.json())
      .catch(err => {
        this.lastSearchPromise = undefined;
        console.error(err);
      });
  }
}

export default new Api;