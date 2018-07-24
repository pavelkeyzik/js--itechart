import Api from './api';
import Render from './render';

const searchInput = document.getElementById('search-input'),
  submitButton = document.getElementById('submit-button'),
  promiseBlock = document.getElementById('promise'),
  promiseUpdateButton = document.getElementById('promise-update');

submitButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  const value = searchInput.value;
  if (!value) return;

  renderList(promiseBlock, value);
});

promiseUpdateButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  if(!Api.lastSearchPromise) return;

  renderList(promiseBlock, Api.lastSearchPromise);
});

function renderList(container, city) {
  Render.loader(container);

  Api.getInformationPromise(city)
    .then((data) => {
      Render.weatherList(container, data.DailyForecasts)
    })
    .catch(() => {
      Render.notFound(container);
    });
}