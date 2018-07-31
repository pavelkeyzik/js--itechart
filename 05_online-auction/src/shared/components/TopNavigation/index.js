import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import UserInfo from '@/shared/components/UserInfo';

class TopNavigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__left">
          <NavLink to="/app" className="navigation__logo">
            <img src={process.env.PUBLIC_URL + '/images/icons/logo.svg'} alt="Logo"/>
          </NavLink>
          <nav className="navigation__menu">
            <NavLink to="/app/bids" className="navigation__link" activeClassName="navigation__link_active">Bids</NavLink>
            <NavLink to="/app/new-lote" className="navigation__link" activeClassName="navigation__link_active">Add new lote</NavLink>
          </nav>
        </div>
        <div className="navigation__right">
          <UserInfo />
        </div>
      </div>
    );
  }
}

export default TopNavigation;