class ListModel {
  constructor(items) {
    this._items = items;
  }

  getItems(city) {
    return Promise.resolve(this.getFromApi(city).then(d => d.DailyForecasts));
  }

  getFromApi(city) {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=tokKLS48aSf50X3PHoQQ13PQIh3Lo7mM&q=${city}`)
      .then(res => res.json())
      .then(items => items[0].Key)
      .then(cityKey => fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=tokKLS48aSf50X3PHoQQ13PQIh3Lo7mM`))
      .then(d => d.json());
  }
}

export default ListModel;