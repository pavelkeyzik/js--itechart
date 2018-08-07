import React from 'react';
import { Switch, HashRouter as Router } from 'react-router-dom';
import routes from '@/routes';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </Router>
    );
  }
}

export default App;