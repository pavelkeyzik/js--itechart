import React, { Component } from 'react';
import '@/shared/styles/form.scss';
import CustomDatePicker from '@/shared/components/CustomDatePicker';
import moment from 'moment';

class NewLoteForm extends Component {
  
  constructor(props) {
    super(props);
    this.lotFileRef = React.createRef();
  }

  state = {
    selectedImage: null,
    startDate: moment(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  }

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
            <CustomDatePicker
              className="form__input"
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="LT"
              dateFormat="MMMM DD, YYYY LT"
              minDate={moment()}
            />
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
            <input onChange={this.handleFileChange} ref={this.lotFileRef} id="lote-file" type="file" hidden/>
          </div>
          <button className="form__submit" type="submit">Add lot</button>
        </form>
      </div>
    );
  }

  handleFileChange = () => {
    const reader = new FileReader();

    reader.onload = (ev) => {
      this.setState({selectedImage: ev.target.result});
    }

    reader.readAsDataURL(this.lotFileRef.current.files[0]);
  }
}

export default NewLoteForm;