import React, { Component } from 'react';
import RegistrationContainer from '@/shared/containers/RegistrationContainer';
import AuthorizationContainer from '@/shared/containers/AuthorizationContainer';
import './index.scss';
import Welcome from './components/Welcome';

const regBlock = 'registration',
      authBlock = 'authorization';

class AuthPage extends Component {

  state = {
    showBlock: regBlock,
  };

  render() {
    return (
      <div className="auth">
        <div className="auth__content">
          <div className="auth__left">
            <Welcome />
          </div>
          <div className="auth__right">
            {this.state.showBlock === regBlock && <RegistrationContainer />}
            {this.state.showBlock === authBlock && <AuthorizationContainer />}
            <div className="auth__alternative">
              {this.state.showBlock === regBlock &&
                <React.Fragment>Have an account? <a onClick={this.changeBlock}>Sign In</a></React.Fragment>}
              {this.state.showBlock === authBlock &&
                <React.Fragment>Don't have an account? <a onClick={this.changeBlock}>Registration</a></React.Fragment>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  changeBlock = () => {
    if(this.state.showBlock === regBlock) {
      return this.setState({
        showBlock: authBlock,
      });
    }

    this.setState({
      showBlock: regBlock,
    });
  }
}

export default AuthPage;