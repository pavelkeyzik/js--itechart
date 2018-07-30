import React, { Component } from 'react';
import RegistrationContainer from '@/shared/containers/RegistrationContainer';
import './index.scss';
import Welcome from './components/Welcome';

class AuthPage extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth__content">
          <div className="auth__left">
            <Welcome />
          </div>
          <div className="auth__right">
            <RegistrationContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthPage;