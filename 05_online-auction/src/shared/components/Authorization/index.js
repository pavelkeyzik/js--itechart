import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import '@/shared/styles/form.scss';
import Validator from '@/shared/utils/Validator';

class Authorization extends PureComponent {

  constructor(props) {
    super(props);
    this.phoneRef = React.createRef();
    this.submitRef = React.createRef();
  }

  state = {
    phoneInputError: false,
  };

  componentDidMount() {
    this.phoneRef.current.focus();
  }

  render() {
    return (
      <div className="authorization">
        <h1 className="authorization__title">Authorization</h1>
        <form className="form" onKeyUp={this.handleKeyUp} onSubmit={this.onSubmit}>
          <div className="form__row">
            <label className="form__label" htmlFor="auth-phone-number">Phone number</label>
            <input
              className={classNames("form__input", {"form__input_error": this.state.phoneInputError})}
              onChange={this.validateText.bind(this, 'phone', 'phoneInputError', 'phone')}
              ref={this.phoneRef}
              type="text"
              id="reg-phone-number"/>
          </div>
          <button ref={this.submitRef} className="form__submit" type="submit" disabled>Sign In</button>
        </form>
      </div>
    );
  }

  onSubmit = (ev) => {
    ev.preventDefault();

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

  handleKeyUp = () => {
    if(!this.state.phoneInputError && this.phoneRef.current.value.length > 0) {
      this.submitRef.current.disabled = false;
    } else {
      this.submitRef.current.disabled = true;
    }
  }

  validateText = (refName, stateField, type) => {
    const value = this[refName + 'Ref'].current.value;
    let validated = false;

    switch(type) {
    case 'phone':
      validated = Validator.validatePhone(value);
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

export default withRouter(Authorization);