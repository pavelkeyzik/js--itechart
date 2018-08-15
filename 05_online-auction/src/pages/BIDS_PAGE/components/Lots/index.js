import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lot from '../Lot';
import LotsIsLoading from '../LotsIsLoading';
import './index.scss';

class Lots extends PureComponent {

  componentDidMount() {
    this.props.onInitLoadingLots();
  }

  render() {
    const { lots } = this.props;

    if(lots.isLoading) return (
        <LotsIsLoading />
    );

    if(lots.error) return (
      <div className="lots">
        <h1>{lots.payload}</h1>
      </div>
    );
    
    if(!lots.payload || lots.payload.length === 0) return (
      <div className="lots">
        <h1>No data..</h1>
      </div>
    );

    return (
      <div className="lots">
        <div className="lots__items">
          {lots.payload.map(lot => <Lot className="lots__item" key={lot.id} data={lot} />)}
        </div>
      </div>
    );
  }
}

Lots.propTypes = {
  lots: PropTypes.object,
};

export default Lots;