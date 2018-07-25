import React, { Component } from 'react';
import PersonalArea from '@/containers/PersonalArea';
import TopNavigation from '@/containers/TopNavigation';
import { Switch, Route } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <Switch>
          <Route exact path="/" component={PersonalArea} />
        </Switch>
      </div>
    );
  }
}

export default Main;