import React, { PureComponent } from 'react';
import './index.scss';

class LotsIsLoading extends PureComponent {
  render() {
    return (
      <div className="lots-loading">
        <div className="lots-loading__item">
          <div className="lots-loading__title"></div>
          <div className="lots-loading__button"></div>
        </div>
        <div className="lots-loading__item">
          <div className="lots-loading__title"></div>
          <div className="lots-loading__button"></div>
        </div>
        <div className="lots-loading__item">
          <div className="lots-loading__title"></div>
          <div className="lots-loading__button"></div>
        </div>
        <div className="lots-loading__item">
          <div className="lots-loading__title"></div>
          <div className="lots-loading__button"></div>
        </div>
      </div>
    );
  }
}

export default LotsIsLoading;