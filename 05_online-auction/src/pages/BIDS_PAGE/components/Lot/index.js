import React, { Component } from 'react';
import './index.scss';
import moment from 'moment';

class Lot extends Component {

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
    const { data } = this.props;

    return (
      <div className="lot">
        <div className="lot__head">
          <div className="lot__time-to-end">
            {this.state.timer}
          </div>
          <div className="lot__image">
            <img width="150" src={data.image_url} alt={data.description}/>
          </div>
          <div className="lot__current-bid">Current bid: <b>{this.state.currentBid}$</b></div>
        </div>
        <div className="lot__bottom">
          <div className="lot__information">{data.description}</div>
          <div className="lot__buttons">
            <button className="lot__button" onClick={this.raseByFivePercent}>+5%</button>
            <button className="lot__button" onClick={this.raseByTenPercent}>+10%</button>
            <button className="lot__button" onClick={this.raseByTwenyPercent}>+20%</button>
          </div>
        </div>
      </div>
    );
  }
  
  raseByFivePercent = () => {
    this.rasePrice(1.05);
  }

  raseByTenPercent = () => {
    this.rasePrice(1.10);
  }

  raseByTwenyPercent = () => {
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

export default Lot;