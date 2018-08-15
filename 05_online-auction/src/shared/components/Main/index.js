import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LeftNavigationContainer from '../../containers/LeftNavigationContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import './index.scss';
import Notification from '..//Notification';
import SuccessNotification from '../SuccessNotification';

class Main extends PureComponent {

  componentWillMount() {
    if(!localStorage.getItem('authorizedUserToken')) {
      this.props.history.push('/');
    }
  }

  render() {
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