import Api from './api';
import Render from './render';

const searchInput = document.getElementById('search-input'),
  promiseSubmitButton = document.getElementById('submit-button'),
  promiseBlock = document.getElementById('promise'),
  promiseUpdateButton = document.getElementById('promise-update');

promiseSubmitButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  const city = searchInput.value;
  if (!city) return;

  getWeatherPromise(promiseBlock, city);
});

promiseUpdateButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  if(!Api.lastSearchPromise) return;

  getWeatherPromise(promiseBlock, Api.lastSearchPromise);
});

function getWeatherPromise(container, city) {
  Render.loader(container);

  Api.getInformationPromise(city)
    .then((data) => {
      Render.weatherList(container, data.DailyForecasts)
    })
    .catch(() => {
      Render.notFound(container);
    });
}