import React, { PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import '@/shared/styles/form.scss';
import { Formik, Field, Form } from 'formik';
import Schema from '@/shared/utils/AuthorizationSchema';
import Notification from '../Notification';
import ErrorNotification from '../ErrorNotification';

class Authorization extends PureComponent {
  render() {
    const { auth } = this.props;

    return (
      <div>
        {auth.loggedIn && <Redirect to="/app" />}
        {auth.error && 
          <Notification>
            <ErrorNotification>{auth.error.message}</ErrorNotification>
          </Notification>
        }
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
      </div>
    );
  }

  onSubmit = values => {
    const params = {
      phoneNumber: values.phone
    };
    this.props.onUserAuthorizationRequest(params);
  };
}

export default withRouter(Authorization);
