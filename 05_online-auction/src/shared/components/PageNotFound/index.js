import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default () => (
  <div className="not-found">
    <div className="not-found__404">4<span>0</span>4</div>
    <div className="not-found__description">Page not found. I'm so sorry...</div>
    <div className="links">
      <Link className="links__item" to={'/app'}>Click Here To Go Home</Link>
    </div>
  </div>
);