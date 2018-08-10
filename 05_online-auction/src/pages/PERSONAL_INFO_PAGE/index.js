import React, { PureComponent } from 'react';
import PersonalAreaContainer from './containers/PersonalAreaContainer';

class PersonalInfoPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <PersonalAreaContainer />
      </React.Fragment>
    );
  }
}

export default PersonalInfoPage;