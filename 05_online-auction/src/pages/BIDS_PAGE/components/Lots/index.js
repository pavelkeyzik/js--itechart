import React, { Component } from 'react';
import Lot from '../Lot';
import lots from '@/shared/data/lots';

class Lots extends Component {

  componentDidMount() {
    this.props.initLoadingLots();
    this.props.lotsLoaded(lots);
  }

  render() {
    const { lots } = this.props;

    if(lots.isLoading) return (<p>Data is loading...</p>);
    if(!lots.data) return (<p>No data..</p>);

    return (
      <div>
        <h2>Lots:</h2>
        {lots.data.map(lot => <Lot key={lot.id} data={lot} />)}
      </div>
    );
  }
}

export default Lots;