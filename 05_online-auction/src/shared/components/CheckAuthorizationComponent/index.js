import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';


class CheckAuthorizationComponent extends PureComponent {

  componentWillMount() {
    if(localStorage.getItem('authorizedUserToken')) {
      this.props.history.push('/app');
    } else {
      this.props.history.push('/auth');
    }
  }

  render() {
    return (<h2>You will be redirect automaticly...</h2>);
  }
}

export default withRouter(CheckAuthorizationComponent);