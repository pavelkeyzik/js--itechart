import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';

class LeftNavigation extends PureComponent {

  state = {
    menuIsOpen: false,
  };

  render() {
    return (
      <div className={classNames("left-navigation", {"left-navigation_is-open": this.state.menuIsOpen})}>
        <div className="left-navigation__top">
          <div href="#" className="left-navigation__burger" onClick={this.toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          <nav className="left-navigation__menu">
            <NavLink replace exact to="/app/" activeClassName="left-navigation__link_active" className="left-navigation__link">
              <i className="fas fa-home"></i>
              <span className="left-navigation__link-text">Home</span>
            </NavLink>
            <NavLink replace to="/app/new-lote" activeClassName="left-navigation__link_active" className="left-navigation__link">
              <i className="fas fa-plus-square"></i>
              <span className="left-navigation__link-text">Add new lot</span>
            </NavLink>
            <NavLink replace to="/app/bids" activeClassName="left-navigation__link_active" className="left-navigation__link">
              <i className="fas fa-gem"></i>
              <span className="left-navigation__link-text">All bids</span>
            </NavLink>
            <NavLink replace to="/app/personal-info" activeClassName="left-navigation__link_active" className="left-navigation__link">
              <i className="fas fa-user-circle"></i>
              <span className="left-navigation__link-text">Presonal info</span>
            </NavLink>
          </nav>
        </div>
        <div className="left-navigation__bottom">
          <div className="left-navigation__sign-out" onClick={this.signOut}>
            <i className="fas fa-power-off"></i>
            <span className="left-navigation__sign-out-text">Sign Out</span>
          </div>
        </div>
      </div>
    );
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    })
  }

  signOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  }
}

export default withRouter(LeftNavigation);