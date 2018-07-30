import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';

class Welcome extends Component {
  render() {
    if(localStorage.getItem('authorizedUserToken')) {
      this.props.history.push('/app');
    }

    return (
      <div className="welcome">
        <div className="welcome__title">This is the amazing application for selling your product on auction</div>
        <div className="welcome__logo">
          <img src="/images/icons/logo.svg" alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default withRouter(Welcome);