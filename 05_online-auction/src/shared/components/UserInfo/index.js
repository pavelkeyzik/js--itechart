import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

class UserInfo extends Component {

  state = {
    isPopUpHidden: true,
  };

  render() {
    return (
      <div className="user-info">
        <div className="user-info__name" onClick={this.handleClick}>Pavel</div>
        <div className="user-info__popup" hidden={this.state.isPopUpHidden}>
          <span className="user-info__signed-as">Signed as <b>2980645</b></span>
          <nav className="user-info__links">
            <a className="user-info__link" onClick={this.handleSignOut}>Sign out</a>
          </nav>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isPopUpHidden: !this.state.isPopUpHidden,
    });
  }

  handleSignOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  }
}

export default withRouter(UserInfo);