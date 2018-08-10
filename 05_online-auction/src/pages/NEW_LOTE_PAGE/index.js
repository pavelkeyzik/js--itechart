import React, { PureComponent } from 'react';
import NewLoteForm from './components/NewLoteForm';

class NewLotePage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <NewLoteForm />
      </React.Fragment>
    );
  }
}

export default NewLotePage;