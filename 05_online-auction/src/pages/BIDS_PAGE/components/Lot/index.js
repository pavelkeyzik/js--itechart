import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import moment from 'moment';

class Lot extends PureComponent {

  state = {
    timer: 'Loading...',
    currentBid: null,
  };

  componentDidMount() {
    this.dateFormat(this.props.data.time_to_end);
    this.setState({
      currentBid: this.props.data.current_bid
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeToEndOfBidInterval);
  }

  render() {
    const { data, price } = this.props;

    return (
      <div className="lot">
        <div className="lot__image">
          <img src={data.image_url} alt={data.description}/>
        </div>
        <div className="lot__content">
          <div className="lot__top">
            <div className="lot__category">{data.category}</div>
            <div className="lot__title"><span>{data.description}</span></div>
          </div>
          <div className="lot__bottom">
            <div className="lot__left">
              <div className="lot__timer">{this.state.timer}</div>
              <button className="lot__price">Current bid ${price}</button>
            </div>
            <div className="lot__upper-buttons">
              <button className="lot__upper-button" onClick={this.raseByFivePercent}>+5%</button>
              <button className="lot__upper-button" onClick={this.raseByTenPercent}>+10%</button>
              <button className="lot__upper-button" onClick={this.raseByTwenyPercent}>+20%</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  raseByFivePercent = () => {
    this.props.onLotRise(this.props.data._id, 5);
    this.rasePrice(1.05);
  }

  raseByTenPercent = () => {
    this.props.onLotRise(this.props.data._id, 10);
    this.rasePrice(1.10);
  }

  raseByTwenyPercent = () => {
    this.props.onLotRise(this.props.data._id, 20);
    this.rasePrice(1.20);
  }

  rasePrice = (count) => {
    this.setState({
      currentBid: (this.state.currentBid * count).toFixed(2),
    });
  }

  dateFormat = (date) => {
    const d = moment(moment.utc(date).diff(moment.utc())).utc();
    this.timeToEndOfBidInterval = setInterval(() => {
      d.subtract(1, 'seconds');
      this.setState({
        timer: `${d.hours()}h ${d.minutes()}m ${d.seconds()}s`,
      })
    }, 1000);
  } 
}

Lot.propTypes = {
  data: PropTypes.object,
};

export default Lot;