import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

class CustomDatePicker extends Component {
  render() {
    return (
      <div>
        <DatePicker {...this.props} />
      </div>
    );
  }
}

export default CustomDatePicker;