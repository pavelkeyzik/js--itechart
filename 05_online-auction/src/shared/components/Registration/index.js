import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import '@/shared/styles/form.scss';
import { Formik, Field, Form } from 'formik';
import Schema from './schema';

class Registration extends PureComponent {
  render() {
    return (
      <div className="registration">
        <h1 className="registration__title">Registration</h1>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            email: '',
            phone: '',
          }}
          onSubmit={values => this.onSubmit(values)}
          validationSchema={Schema}
          render={({ errors, touched }) => (
            <Form className="form">
              <div className="form__row">
                <label className="form__label" htmlFor="name">First name</label>
                <Field
                  name="name"
                  type="text"
                  className={classNames("form__input", {"form__input_error": errors.name && touched.name })}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="surname">Last name</label>
                <Field
                  name="surname"
                  type="text"
                  className={classNames("form__input", {"form__input_error": errors.surname && touched.surname })}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="email">E-mail</label>
                <Field
                  name="email"
                  type="email"
                  className={classNames("form__input", {"form__input_error": errors.email && touched.email })}
                />
              </div>
              <div className="form__row">
                <label className="form__label" htmlFor="phone">Phone number</label>
                <Field
                  name="phone"
                  type="text"
                  className={classNames("form__input", {"form__input_error": errors.phone && touched.phone })}
                />
              </div>
              <button className="form__submit" type="submit">Sign Up</button>
            </Form>
          )}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    const params = {
      id: new Date().getTime(),
      name: values.name,
      surname: values.surname,
      email: values.email,
      phone: values.phone,
    }
    this.props.onUserRegistredSuccessful();

    localStorage.setItem('authorizedUserInfo', JSON.stringify(params));
    localStorage.setItem('authorizedUserToken', this.props.reg.token);
    this.props.history.push('/app');
  }
}

export default withRouter(Registration);