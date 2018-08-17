import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import config from '@/config';

class CheckAuthorizationComponent extends PureComponent {

  componentWillMount() {
    if(Cookies.get(config.keyForSaveToken)) {
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