import React, { PureComponent } from 'react';
import './index.scss';
import Welcome from './components/Welcome';

import { Switch, Route, NavLink } from 'react-router-dom';
import RouteWithSubRoutes from '@/shared/components/RouteWithSubRoutes';

class AuthPage extends PureComponent {

  render() {
    const { pathname } = this.props.location;

    return (
        <div className="auth">
          <div className="auth__content">
            <div className="auth__left">
              <Welcome />
            </div>
            <div className="auth__right">
              <Route>
                <Switch>
                  {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </Switch>
              </Route>
              <div className="auth__alternative">
                {pathname === '/auth/registration' &&
                  <React.Fragment>Have an account? <NavLink to="/auth">Sign In</NavLink></React.Fragment>}
                {pathname === '/auth' &&
                  <React.Fragment>Don't have an account? <NavLink to="/auth/registration">Registration</NavLink></React.Fragment>}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AuthPage;