import React from 'react';
import './index.scss';

export default () => (
    <div className="personal-loader">
      <div className="personal-loader__content">
        <div className="personal-loader__row">
          <div className="personal-loader__label">Id</div>
          <div className="personal-loader__field"></div>
        </div>
        <div className="personal-loader__row">
          <div className="personal-loader__label">Name</div>
          <div className="personal-loader__field"></div>
        </div>
        <div className="personal-loader__row">
          <div className="personal-loader__label">Surname</div>
          <div className="personal-loader__field"></div>
        </div>
        <div className="personal-loader__row">
          <div className="personal-loader__label">E-mail</div>
          <div className="personal-loader__field"></div>
        </div>
        <div className="personal-loader__row">
          <div className="personal-loader__label">Phone number</div>
          <div className="personal-loader__field"></div>
        </div>
      </div>
    </div>
);