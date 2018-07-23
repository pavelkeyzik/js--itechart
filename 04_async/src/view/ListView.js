class ListView {
  constructor(model, elements) {
    this._model = model;
    this._elements = elements;
  }

  render(city) {
    this._elements.list.innerHTML = 'Loading...';
    let itemsString = '';
    this._model.getItems(city).then(data => {
      data.forEach(item => {
        itemsString += this.renderItem(item);
      });
      this._elements.list.innerHTML = `<div>${itemsString}</div>`;
    });
  }

  renderItem(item) {
    const temperature = item.Temperature;
    return `<div>
      <hr>
      <h3>${new Date(item.Date).toDateString()}</h3>
      <div>
        Min <b>${temperature.Minimum.Value}${temperature.Minimum.Unit}</b>
        Max <b>${temperature.Maximum.Value}${temperature.Maximum.Unit}</b>
      </div>
    </div>`;
  }
}

export default ListView;