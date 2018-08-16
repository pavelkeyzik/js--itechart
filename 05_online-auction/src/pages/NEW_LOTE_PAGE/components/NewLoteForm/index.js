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
            startPrice: 0,
            category: 'electronics',
            dateOfTheEnd: moment(),
            file: '',
          }}
          onSubmit={values => this.onSubmit(values)}
          validationSchema={Schema}
          render={({ handleChange, values, errors, touched }) => (
            <Form className="form">
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
                <label className="form__label" htmlFor="startPrice">Start price ($)</label>
                <Field
                  name="startPrice"
                  id="startPrice"
                  type="number"
                  className={classNames("form__input", {"form__input_error": errors.startPrice && touched.startPrice })}
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
                <label className="form__label" htmlFor="dateOfTheEnd">Date of the end</label>
                <Field
                  name="dateOfTheEnd"
                  render={({ form, field }) => (
                    <CustomDatePicker
                      className="form__input"
                      selected={field.value}
                      onChange={this.handleChange.bind(this, form, field)}
                      showTimeSelect
                      timeFormat="LT"
                      id="dateOfTheEnd"
                      dateFormat="MMMM DD, YYYY LT"
                      minDate={moment()}
                    />
                  )}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="file">Image</label>
                <Field
                  name="file"
                  render={({ form, field }) => (
                    <React.Fragment>
                      <div className="form__file">
                        <div className="form__file-image">
                          {this.state.selectedImage && <img src={this.state.selectedImage} alt="Lololo"/>}
                        </div>
                        <div className="form__file-content">
                          <span className="form__file-text">Click button for load</span>
                          <label className="form__file-button" htmlFor="file">Choose file</label>
                        </div>
                      </div>
                      <input onChange={this.handleFileChange.bind(this, form, field)} id="file" type="file" accept="image/x-png,image/jpeg" hidden/>
                    </React.Fragment>
                  )}
                />
              </div>
              <button className="form__submit" type="submit">Add lot</button>
            </Form>
          )}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    // TODO: send form with 'values' to Back-End
  }

  handleFileChange = (form, field, ev) => {
    const reader = new FileReader();

    reader.onload = (ev) => {
      this.setState({selectedImage: ev.target.result});
    }

    reader.readAsDataURL(ev.target.files[0]);
    form.setFieldValue(field.name, ev.target.files[0]);
  }
}

export default NewLoteForm;