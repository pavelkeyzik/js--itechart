import React, { Component } from 'react';
import './index.scss';

class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <h1 className="registration__title">Регистрация</h1>
        <form className="form">
          <div className="form__row">
            <label className="form__label" htmlFor="reg-name">Имя</label>
            <input className="form__input" type="text" id="reg-name"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-surname">Фамилия</label>
            <input className="form__input" type="text" id="reg-surname"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-email">E-mail</label>
            <input className="form__input" type="email" id="reg-email"/>
          </div>
          <div className="form__row">
            <label className="form__label" htmlFor="reg-phone-number">Номер телефона</label>
            <input className="form__input" type="text" id="reg-phone-number"/>
          </div>
          <button className="form__submit" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default Registration;