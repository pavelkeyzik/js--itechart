import React, { Component } from 'react';
import Lot from '../Lot';
import LotsIsLoading from '../LotsIsLoading';
import './index.scss';

class Lots extends Component {

  componentDidMount() {
    this.props.initLoadingLots();
  }

  render() {
    const { lots } = this.props;

    if(lots.isLoading) return (
        <LotsIsLoading />
    );
    
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