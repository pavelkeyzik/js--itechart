import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftNavigation from '../LeftNavigation';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import './index.scss';
import Notification from '@/shared/components/Notification';
import SuccessNotification from '@/shared/components/SuccessNotification';

class Main extends Component {
  render() {
    return (
      <Route>
        <div className="main">
        {!localStorage.getItem('authorizedUserToken') && <Redirect to="/" />}
        {localStorage.getItem('authorizedUserToken') &&
          <React.Fragment>
            <Notification>
              <SuccessNotification>You have successfully logged in!</SuccessNotification>
            </Notification>
            <div className="main__container">
              <div className="main__navigation">
                <LeftNavigation />
              </div>
              <div className="main__content">
                <Switch>
                  {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </Switch>
              </div>
            </div>
          </React.Fragment>
        }
        </div>
      </Route>
    );
  }
}

Main.propTypes = {
  routes: PropTypes.array,
};

export default Main;