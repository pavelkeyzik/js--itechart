import React, { Component } from 'react';
import LeftNavigation from '../LeftNavigation';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import './index.scss';

class Main extends Component {
  render() {
    return (
      <Route>
        <div className="main">
        {!localStorage.getItem('authorizedUserToken') && <Redirect to="/" />}
        {localStorage.getItem('authorizedUserToken') &&
          <React.Fragment>
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

export default Main;