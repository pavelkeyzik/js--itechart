import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import config from '@/config';

const RouteWithSubRoutes = route => {
  return (
    <React.Fragment>
      {(route.adminOnly && Cookies.getJSON(config.userInfo).role !== config.adminRole)
        ?
        <Redirect to='/app' />
        : 
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      }
    </React.Fragment>
  );
};

export default RouteWithSubRoutes;