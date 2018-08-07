import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const notificationRoot = document.getElementById('notification');

class Notification extends Component {

  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.timer = null;
    this.notificationRef = React.createRef();
  }

  componentDidMount() {
    notificationRoot.appendChild(this.container);
    this.timer = setTimeout(() => {
      this.notificationRef.current.classList.add('notification__hidden');
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    notificationRoot.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(<div ref={this.notificationRef} className="notification">{this.props.children}</div>, this.container);
  }
}

export default Notification;