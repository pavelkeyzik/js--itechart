import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import '@/shared/styles/form.scss';
import Validator from '@/shared/utils/Validator';

class Registration extends Component {

  state = {
    nameInputError: false,
    surNameError: false,
    phoneInputError: false,
    emailInputError: false,
  };

  render() {
    return (
      <div className="registration">
        <h1 className="registration__title">Registration</h1>
        <form className="form" onSubmit={this.onSubmit} onKeyUp={this.handleKeyUp}>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-name">First name</label>
            <input
              className={"form__input " + (this.state.nameInputError ? "form__input_error" : "")}
              onChange={this.validateText.bind(this, 'name', 'nameInputError', 'text')}
              ref="name"
              type="text"
              id="reg-name"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-surname">Last name</label>
            <input
              className={"form__input " + (this.state.surNameError ? "form__input_error" : "")}
              onChange={this.validateText.bind(this, 'surname', 'surNameError', 'text')}
              ref="surname"
              type="text"
              id="reg-surname"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-email">E-mail</label>
            <input
              className={"form__input " + (this.state.emailInputError ? "form__input_error" : "")}
              onChange={this.validateText.bind(this, 'email', 'emailInputError', 'email')}
              ref="email"
              type="email"
              id="reg-email"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-phone-number">Phone number</label>
            <input
              className={"form__input " + (this.state.phoneInputError ? "form__input_error" : "")}
              onChange={this.validateText.bind(this, 'phone', 'phoneInputError', 'phone')}
              ref="phone"
              type="text"
              id="reg-phone-number"/>
          </div>
          <button ref="submit" className="form__submit" type="submit" disabled>Sign Up</button>
        </form>
      </div>
    );
  }

  handleKeyUp = () => {
    if(!(this.state.nameInputError || this.state.surNameError || this.state.phoneInputError) &&
      this.refs.name.value.length > 0 &&
      this.refs.surname.value.length > 0 &&
      this.refs.email.value.length > 0 &&
      this.refs.phone.value.length > 0) {
        this.refs.submit.disabled = false;
    } else {
      this.refs.submit.disabled = true;
    }
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    const params = {
      id: new Date().getTime(),
      name: this.refs.name.value,
      surname: this.refs.surname.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
    }
    this.props.userRegistredSuccessful();

    localStorage.setItem('authorizedUserInfo', JSON.stringify(params));
    localStorage.setItem('authorizedUserToken', this.props.reg.token);
    this.props.history.push('/app');
  }

  validateText = (refName, stateField, type) => {
    const value = this.refs[refName].value;
    let validated = false;

    switch(type) {
    case 'text':
      validated = Validator.validateText(value);
      break;
    case 'phone':
      validated = Validator.validatePhone(value);
      break;
    case 'email':
      validated = Validator.validateEmail(value);
      break;
    default:
      validated = false;
      break;
    }

    if(!validated) {
      this.setState({
        [stateField]: true,
      });
    } else if(this.state[stateField]) {
      this.setState({
        [stateField]: false,
      });
    }
  }
}

export default withRouter(Registration);