import React, { PureComponent } from 'react';
import '@/shared/styles/form.scss';
import CustomDatePicker from '@/shared/components/CustomDatePicker';
import moment from 'moment';
import classNames from 'classnames';
import { Formik, Field, Form } from 'formik';
import Schema from '@/shared/utils/NewLoteSchema';

class NewLoteForm extends PureComponent {
  
  state = {
    selectedImage: null,
  };

  handleChange = (form, field, value) => {
    form.setFieldValue(field.name, value);
  }

  render() {
    return (
      <div className="new-lote">
        <Formik
          initialValues={{
            description: '',
            current_bid: 0,
            category: 'electronics',
            time_to_end: moment(),
            image: '',
          }}
          onSubmit={values => this.onSubmit(values)}
          validationSchema={Schema}
          render={({ handleChange, values, errors, touched }) => (
            <Form className="form" encType="multipart/form-data">
              <div className="form__row">
                <label className="form__label" htmlFor="description">Lote description</label>
                <Field
                  name="description"
                  id="description"
                  type="text"
                  className={classNames("form__input", {"form__input_error": errors.description && touched.description })}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="current_bid">Start price ($)</label>
                <Field
                  name="current_bid"
                  id="current_bid"
                  type="number"
                  className={classNames("form__input", {"form__input_error": errors.current_bid && touched.current_bid })}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="category">Lote Category</label>
                <Field
                  name="category"
                  id="category"
                  component="select"
                  className={classNames("form__input", {"form__input_error": errors.category && touched.category })}
                >
                  <option value="electronics">Electronics</option>
                  <option value="clothes">Clothes</option>
                  <option value="accessories">Accessories</option>
                </Field>
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="time_to_end">Date of the end</label>
                <Field
                  name="time_to_end"
                  render={({ form, field }) => (
                    <CustomDatePicker
                      className="form__input"
                      selected={field.value}
                      onChange={this.handleChange.bind(this, form, field)}
                      showTimeSelect
                      timeFormat="LT"
                      id="time_to_end"
                      dateFormat="MMMM DD, YYYY LT"
                      minDate={moment()}
                    />
                  )}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="image">Image</label>
                <div className="form__file">
                  <div className="form__file-image">
                    {this.state.selectedImage && <img src={this.state.selectedImage} alt="Lololo"/>}
                  </div>
                  <div className="form__file-content">
                    <span className="form__file-text">Click button for load</span>
                    <label className="form__file-button" htmlFor="image">Choose file</label>
                  </div>
                </div>
                <Field
                  name="image"
                  render={({ form, field }) => (
                    <input onChange={this.handleFileChange.bind(this, form, field)} id="image" type="file" accept="image/x-png,image/jpeg" hidden/>
                  )}
                />
              </div>
              <button className="form__submit" type="submit" disabled={this.props.newLot.isLoading}>Add lot</button>
            </Form>
          )}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    const formData = new FormData();
    
    formData.append('image', values.image);
    formData.append('description', values.description);
    formData.append('time_to_end', values.time_to_end.format());
    formData.append('current_bid', values.current_bid);
    formData.append('category', values.category);

    this.props.onNewLoteSend(formData);
  }

  handleFileChange = (form, field, ev, value) => {
    const reader = new FileReader();

    reader.onload = (ev) => {
      this.setState({selectedImage: ev.target.result});
    }

    reader.readAsDataURL(ev.target.files[0]);
    form.setFieldValue(field.name, ev.target.files[0]);
  }
}

export default NewLoteForm;