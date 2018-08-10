import React, { PureComponent } from 'react';
import './index.scss';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="home">
        <div className="qr-code">
          <img src="./images/qr-codes/pavelkeyzik-github.svg" alt="QR-code pavelkeyzik.github.io"/>
        </div>
        <div className="home__description">Don't scan me! Please do not!</div>
      </div>
    );
  }
}

export default HomePage;