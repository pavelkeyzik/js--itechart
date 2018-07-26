import React, { Component } from 'react';
import TopNavigation from '../TopNavigation';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

class Main extends Component {
  render() {
    return (
      <Route>
        <div>
          <TopNavigation />
          <Switch>
            {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Switch>
        </div>
      </Route>
    );
  }
}

export default Main;