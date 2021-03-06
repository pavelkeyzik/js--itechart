import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LotsIsLoading from '../LotsIsLoading';
import './index.scss';
import LotContainer from '../../containers/LotContainer';
import Cookies from 'js-cookie';
import config from '@/config';

class Lots extends PureComponent {

  constructor(props) {
    super(props);
    this.userInfo = Cookies.getJSON(config.userInfo);
  }

  componentDidMount() {
    this.props.onInitLoadingLots();
  }

  componentWillUnmount() {
    this.props.onSocketConnectionClose();
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
          {lots.payload.map(lot =>
            <LotContainer
              className="lots__item"
              canRemove={this.userInfo.role === config.adminRole}
              price={lot.current_bid}
              key={lot._id}
              data={lot}
            />)
          }
        </div>
      </div>
    );
  }
}

Lots.propTypes = {
  lots: PropTypes.object,
};

export default Lots;