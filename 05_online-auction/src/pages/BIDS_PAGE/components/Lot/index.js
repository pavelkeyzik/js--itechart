import React, { Component } from 'react';
import './index.scss';
import moment from 'moment';

class Lot extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="lot">
        <div className="lot__head">
          <div className="lot__time-to-end">
            {moment().to(moment(data.time_to_end))}
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
}

export default Lot;