import React, { PureComponent } from 'react';
import NewLoteFormContainer from './containers/NewLoteFormContainer';

class NewLotePage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <NewLoteFormContainer />
      </React.Fragment>
    );
  }
}

export default NewLotePage;