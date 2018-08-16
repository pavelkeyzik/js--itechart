import React, { PureComponent } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';

class Welcome extends PureComponent {
  
  render() {
    return (
      <div className="welcome">
        <div className="welcome__title">This is the amazing application for selling your product on auction</div>
        <div className="welcome__logo">
          <img src="./images/icons/logo.svg" alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default withRouter(Welcome);
