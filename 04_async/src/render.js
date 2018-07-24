class Render {

  weatherList(container, items) {
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

    container.innerHTML = string;
  }

  notFound(container) {
    container.innerHTML = 'Not Found';
  }

  loader(container) {
    container.innerHTML = 'Loading data...';
  }
}

export default new Render;