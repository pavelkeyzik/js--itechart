import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

class Registration extends Component {
  render() {
    if(this.props.reg.token) {
      localStorage.setItem('authorizedUserToken', this.props.reg.token);
      this.props.history.push('/app');
    }

    return (
      <div className="registration">
        <h1 className="registration__title">Регистрация</h1>
        <form className="form">
          <div className="form__row">
            <label className="form__label" htmlFor="reg-name">Имя</label>
            <input ref="name" className="form__input" type="text" id="reg-name"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-surname">Фамилия</label>
            <input ref="surname" className="form__input" type="text" id="reg-surname"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-email">E-mail</label>
            <input ref="email" className="form__input" type="email" id="reg-email"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-phone-number">Номер телефона</label>
            <input ref="phone" className="form__input" type="text" id="reg-phone-number"/>
          </div>
          <button onClick={this.onSubmit} className="form__submit" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
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
  }
}

export default withRouter(Registration);