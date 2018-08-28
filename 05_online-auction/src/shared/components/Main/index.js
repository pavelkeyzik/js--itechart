import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LeftNavigationContainer from '../../containers/LeftNavigationContainer';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import './index.scss';
import Notification from '../Notification';
import SuccessNotification from '../SuccessNotification';
import Cookies from 'js-cookie';
import config from '@/config';
import jwt from 'jwt-decode';

class Main extends PureComponent {
  render() {
    if(!this.props.auth.loggedIn) return <Redirect to="/" />

    if(!Cookies.getJSON(config.userInfo) || (jwt(Cookies.getJSON(config.userInfo).token).exp - Math.floor(new Date().getTime() / 1000) < 0)) {
      this.props.onLogOut();
      return (<h2>Redirecting...</h2>);
    }

    return (
      <Route>
        <div className="main">
          <React.Fragment>
            <Notification>
              <SuccessNotification>You have successfully logged in!</SuccessNotification>
            </Notification>
            <div className="main__container">
              <div className="main__navigation">
                <LeftNavigationContainer />
              </div>
              <div className="main__content">
                <Switch>
                  {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </div>
      </Route>
    );
  }
}

Main.propTypes = {
  routes: PropTypes.array,
};

export default withRouter(Main);