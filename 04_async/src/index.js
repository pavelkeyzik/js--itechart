import Api from './api';

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
  container.innerHTML = 'is loading...';

  Api.getInformationPromise(city)
    .then((data) => {
      container.innerHTML = renderItems(data.DailyForecasts);
    })
    .catch(() => {
      container.innerHTML = 'City not found...';
    });
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