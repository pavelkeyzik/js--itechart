import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import '@/shared/styles/form.scss';
import Validator from '@/shared/utils/Validator';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.submitRef = React.createRef();
  }

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
              className={classNames("form__input", {"form__input_error": this.state.nameInputError})}
              onChange={this.validateText.bind(this, 'name', 'nameInputError', 'text')}
              ref={this.nameRef}
              type="text"
              id="reg-name"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-surname">Last name</label>
            <input
              className={classNames("form__input", {"form__input_error": this.state.surNameError})}
              onChange={this.validateText.bind(this, 'surname', 'surNameError', 'text')}
              ref={this.surnameRef}
              type="text"
              id="reg-surname"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-email">E-mail</label>
            <input
              className={classNames("form__input", {"form__input_error": this.state.emailInputError})}
              onChange={this.validateText.bind(this, 'email', 'emailInputError', 'email')}
              ref={this.emailRef}
              type="email"
              id="reg-email"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-phone-number">Phone number</label>
            <input
              className={classNames("form__input", {"form__input_error": this.state.phoneInputError})}
              onChange={this.validateText.bind(this, 'phone', 'phoneInputError', 'phone')}
              ref={this.phoneRef}
              type="text"
              id="reg-phone-number"/>
          </div>
          <button ref={this.submitRef} className="form__submit" type="submit" disabled>Sign Up</button>
        </form>
      </div>
    );
  }

  handleKeyUp = () => {
    if(!(this.state.nameInputError || this.state.surNameError || this.state.phoneInputError) &&
      this.nameRef.current.value.length > 0 &&
      this.surnameRef.current.value.length > 0 &&
      this.emailRef.current.value.length > 0 &&
      this.phoneRef.current.value.length > 0) {
        this.submitRef.current.disabled = false;
    } else {
      this.submitRef.current.disabled = true;
    }
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    const params = {
      id: new Date().getTime(),
      name: this.nameRef.current.value,
      surname: this.surnameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value,
    }
    this.props.userRegistredSuccessful();

    localStorage.setItem('authorizedUserInfo', JSON.stringify(params));
    localStorage.setItem('authorizedUserToken', this.props.reg.token);
    this.props.history.push('/app');
  }

  validateText = (refName, stateField, type) => {
    const value = this[refName + 'Ref'].current.value;
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