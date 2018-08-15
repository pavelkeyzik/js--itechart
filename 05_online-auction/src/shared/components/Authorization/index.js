import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import '@/shared/styles/form.scss';
import { Formik, Field, Form } from 'formik';
import Schema from '@/shared/utils/AuthorizationSchema';

class Authorization extends PureComponent {
  render() {
    return (
      <div className="authorization">
        <h1 className="authorization__title">Authorization</h1>
        <Formik
          initialValues={{
            phone: '',
          }}
          onSubmit={values => this.onSubmit(values)}
          validationSchema={Schema}
          render={({ errors, touched }) => (
            <Form className="form">
              <div className="form__row">
                <label className="form__label" htmlFor="phone">Phone number</label>
                <Field
                  name="phone"
                  type="text"
                  className={classNames("form__input", {"form__input_error": errors.phone && touched.phone })}
                />
              </div>
              <button className="form__submit" type="submit">Sign In</button>
            </Form>
          )}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    const params = {
      id: new Date().getTime(),
      name: 'Pavel',
      surname: 'Keyzik',
      email: 'pavel.keyzik@gmail.com',
      phone: '2980645',
    }
    this.props.onUserAuthorizedSuccessful();

    localStorage.setItem('authorizedUserInfo', JSON.stringify(params));
    localStorage.setItem('authorizedUserToken', this.props.auth.token);
    this.props.history.push('/app');
  }
}

export default withRouter(Authorization);