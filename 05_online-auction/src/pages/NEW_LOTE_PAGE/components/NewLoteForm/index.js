import React, { Component } from 'react';
import '@/shared/styles/form.scss';

class NewLoteForm extends Component {

  state = {
    selectedImage: null,
  };

  render() {
    return (
      <div className="new-lote">
        <form action="" className="form">
          <div className="form__row">
            <label className="form__label" htmlFor="lote-name">Lote description</label>
            <input className="form__input" id="lote-description" type="text"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="lote-name">Start price ($)</label>
            <input className="form__input" id="lote-description" type="number"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="lote-name">Category</label>
            <select className="form__input" id="lote-description" type="text">
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="lote-name">Date of the end</label>
            <input className="form__input" id="lote-description" type="text"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="lote-file">Image</label>
            <div className="form__file">
              <div className="form__file-image">
                {this.state.selectedImage && <img src={this.state.selectedImage} alt="Lololo"/>}
              </div>
              <div className="form__file-content">
                <span className="form__file-text">Click button for load</span>
                <label className="form__file-button" htmlFor="lote-file">Choose file</label>
              </div>
            </div>
            <input onChange={this.handleFileChange} ref="lotFile" id="lote-file" type="file" hidden/>
          </div>
          <button ref="submit" className="form__submit" type="submit">Add lot</button>
        </form>
      </div>
    );
  }

  handleFileChange = () => {
    const reader = new FileReader();

    reader.onload = (ev) => {
      this.setState({selectedImage: ev.target.result});
    }

    reader.readAsDataURL(this.refs.lotFile.files[0]);
  }
}

export default NewLoteForm;