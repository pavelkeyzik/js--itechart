import React, { Component } from 'react';
import './index.scss';
import moment from 'moment';

class Lot extends Component {

  state = {
    timer: 'Loading...',
  };

  componentDidMount() {
    this.dateFormat(this.props.data.time_to_end);
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
          <div className="lot__current-bid">Current bid: <b>{data.current_bid}$</b></div>
        </div>
        <div className="lot__bottom">
          <div className="lot__information">{data.description}</div>
          <div className="lot__buttons">
            <button className="lot__button">+5%</button>
            <button className="lot__button">+10%</button>
            <button className="lot__button">+20%</button>
          </div>
        </div>
      </div>
    );
  }

  dateFormat = (date) => {
    const d = moment(moment.utc(date).diff(moment.utc())).utc();
    setInterval(() => {
      d.subtract(1, 'seconds');
      this.setState({
        timer: `${d.hours()}h ${d.minutes()}m ${d.seconds()}s`,
      })
    }, 1000);
  } 
}

export default Lot;