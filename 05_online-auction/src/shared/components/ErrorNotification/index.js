import React, { PureComponent } from 'react';
import './index.scss';

class ErrorNotification extends PureComponent {
  render() {
    return (
      <div className="error-notification">
        <div className="error-notification__icon">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="error-notification__text">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ErrorNotification;