import React from 'react';
import { Switch, Route } from 'react-router';
import PageNotFound from '@/components/PageNotFound';
import Main from '@/containers/Main';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;