import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import moment from 'moment';
import notFoundImage from './images/not-found.jpg';

class Lot extends PureComponent {

  state = {
    timer: 'Loading...',
    currentBid: null,
    outgoing: false,
    canRiseUp: false,
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
    const { data, price, canRemove } = this.props;

    return (
      <div className="lot">
        {canRemove &&
          <div className="lot__remove" onClick={this.handleRemove}>
            <i className="fas fa-trash"></i>
          </div>
        }
        <div className="lot__image">
          <div className="lot__image-content">
            <img src={data.image_url} onError={this.handleImageError} alt={data.description}/>
          </div>
        </div>
        <div className="lot__content">
          <div className="lot__top">
            <div className="lot__category">{data.category}</div>
            <div className="lot__title"><span>{data.description}</span></div>
          </div>
          <div className="lot__bottom">
            <div className="lot__left">
              {this.state.outgoing ?
                <div className="lot__timer lot__timer_outgoing">Outgoing</div>
                :
                <div className="lot__timer">{this.state.timer}</div>
              }
              <button className="lot__price">Current bid ${price}</button>
            </div>
            <div className="lot__upper-buttons">
              <button className="lot__upper-button" onClick={this.raseByFivePercent} hidden={!this.state.canRiseUp}>+5%</button>
              <button className="lot__upper-button" onClick={this.raseByTenPercent} hidden={!this.state.canRiseUp}>+10%</button>
              <button className="lot__upper-button" onClick={this.raseByTwenyPercent} hidden={!this.state.canRiseUp}>+20%</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleRemove = () => {
    this.props.onLoteRemove(this.props.data._id);
  }

  handleImageError = (ev) => {
    ev.target.src = notFoundImage;
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
    const d = moment.duration(moment.utc(date) - moment.utc());
    this.timeToEndOfBidInterval = setInterval(() => {
      d.subtract(1, 'seconds');
      if(d <= 0) {
        clearInterval(this.timeToEndOfBidInterval);
        this.setState({ outgoing: true, canRiseUp: false });
        return;
      }
      this.setState({
        timer: `${d.hours()}h ${d.minutes()}m ${d.seconds()}s`,
        canRiseUp: true,
      })
    }, 1000);
  } 
}

Lot.propTypes = {
  data: PropTypes.object,
};

export default Lot;