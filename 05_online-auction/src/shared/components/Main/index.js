import React, { Component } from 'react';
import TopNavigation from '../TopNavigation';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

class Main extends Component {
  render() {
    if(!localStorage.getItem('authorizedUserToken')) {
      return (<Redirect to="/" />)
    }

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