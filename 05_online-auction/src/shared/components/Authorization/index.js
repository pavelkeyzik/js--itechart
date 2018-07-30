import React, { Component } from 'react';
import './index.scss';
import '@/shared/styles/form.scss';

class Authorization extends Component {
  render() {
    return (
      <div className="authorization">
        <h1 className="authorization__title">Authorization</h1>
        <form className="form">
          <div className="form__row">
            <label className="form__label" htmlFor="auth-phone-number">Phone number</label>
            <input ref="phone" className="form__input" type="text" id="auth-phone-number"/>
          </div>
          <button onClick={this.onSubmit} className="form__submit" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default Authorization;