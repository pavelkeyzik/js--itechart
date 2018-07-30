import React, { Component } from 'react';
import RegistrationContainer from '@/shared/containers/RegistrationContainer';
import Authorization from '@/shared/components/Authorization';
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
            <div>
              {this.state.showBlock === regBlock && <RegistrationContainer />}
              {this.state.showBlock === authBlock && <Authorization />}
            </div>
            <div className="auth__alternative">
              {this.state.showBlock === regBlock &&
                <div>Have an account? <a onClick={this.changeBlock}>Sign In</a></div>}
              {this.state.showBlock === authBlock &&
                <div>Don't have an account? <a onClick={this.changeBlock}>Registration</a></div>}
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