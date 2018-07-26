import React, { Component } from 'react';
import PersonalAreaContainer from './containers/PersonalAreaContainer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <hr/>
        <PersonalAreaContainer />
      </div>
    );
  }
}

export default HomePage;