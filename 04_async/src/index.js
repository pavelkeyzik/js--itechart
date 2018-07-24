import Api from './api';
import Render from './render';

const searchInput = document.getElementById('search-input'),
  promiseSubmitButton = document.getElementById('submit-button'),
  promiseBlock = document.getElementById('promise'),
  promiseUpdateButton = document.getElementById('promise-update');

const searchInputAwait = document.getElementById('search-input-await'),
  awaitSubmitButton = document.getElementById('submit-button-await'),
  awaitBlock = document.getElementById('await'),
  awaitUpdateButton = document.getElementById('await-update');

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

awaitSubmitButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  const city = searchInputAwait.value;
  if(!city) return;

  getWeatherAwait(awaitBlock, city);
});

awaitUpdateButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  if(!Api.lastSearchAwait) return;

  getWeatherAwait(awaitBlock, Api.lastSearchAwait);
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

function getWeatherAwait(container, city) {
  Render.loader(container);

  Api.getInformationAwait(city)
    .then((data) => {
      Render.weatherList(container, data.DailyForecasts);
    })
    .catch(() => {
      Render.notFound(container);
    });
}