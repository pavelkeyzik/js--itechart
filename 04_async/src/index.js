const searchInput = document.getElementById('search-input'),
  submitButton = document.getElementById('submit-button'),
  promiseBlock = document.getElementById('promise'),
  promiseUpdateButton = document.getElementById('promise-update');

let lastSearchPromise;

submitButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  const value = searchInput.value;
  if (!value) return;
  lastSearchPromise = value;

  renderList(promiseBlock, value);
});

promiseUpdateButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  if(!lastSearchPromise) return;

  renderList(promiseBlock, lastSearchPromise);
});

function renderList(container, city) {
  container.innerHTML = 'is loading...';

  getFromApiPromise(city)
    .then((data) => {
      container.innerHTML = renderItems(data.DailyForecasts);
    })
    .catch(() => container.innerHTML = 'City not found...');
}

function getFromApiPromise(city) {
  return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=tokKLS48aSf50X3PHoQQ13PQIh3Lo7mM&q=${city}`)
    .then(res => res.json())
    .then(items => items[0].Key)
    .then(cityKey => fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=tokKLS48aSf50X3PHoQQ13PQIh3Lo7mM`))
    .then(d => d.json());
}

function renderItems(items) {
  let string = '';

  items.forEach((item) => {
    const temperature = item.Temperature;
    string += `<div>
      <hr>
      <h3>${new Date(item.Date).toDateString()}</h3>
      <div>
        Min <b>${temperature.Minimum.Value}${temperature.Minimum.Unit}</b>
        Max <b>${temperature.Maximum.Value}${temperature.Maximum.Unit}</b>
      </div>
    </div>`;
  });

  return string;
}