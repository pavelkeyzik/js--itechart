import React, { PureComponent } from 'react';
import './index.scss';

class SuccessNotification extends PureComponent {
  render() {
    return (
      <div className="success-notification">
        <div className="success-notification__icon">
          <i className="fas fa-check"></i>
        </div>
        <div className="success-notification__text">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SuccessNotification;