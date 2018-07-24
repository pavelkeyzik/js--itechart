import React from 'react';
import { Switch, Route } from 'react-router';
import PersonalArea from '../PersonalArea';
import PageNotFound from '../../components/PageNotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PersonalArea} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;