import React, { Component } from 'react';
import Lot from '../Lot';
import lots from '@/shared/data/lots';
import './index.scss';

class Lots extends Component {

  componentDidMount() {
    this.props.initLoadingLots();
    this.props.lotsLoaded(lots);
  }

  render() {
    const { lots } = this.props;

    if(lots.isLoading) return (<p>Data is loading...</p>);
    if(!lots.data || lots.data.length === 0) return (<p>No data..</p>);

    return (
      <div className="lots">
        <div className="lots__items">
          {lots.data.map(lot => <Lot className="lots__item" key={lot.id} data={lot} />)}
        </div>
      </div>
    );
  }
}

export default Lots;