import React, { Component } from 'react';
import TopNavigation from '../TopNavigation';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

class Main extends Component {
  render() {
    return (
      <Route>
        <div>
        {!localStorage.getItem('authorizedUserToken') && <Redirect to="/" />}
        {localStorage.getItem('authorizedUserToken') &&
          <div>
            <TopNavigation />
            <Switch>
              {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
          </div>
        }
        </div>
      </Route>
    );
  }
}

export default Main;