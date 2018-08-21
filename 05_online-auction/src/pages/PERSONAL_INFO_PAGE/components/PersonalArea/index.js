import React, { PureComponent } from 'react';
import './index.scss';

class PersonalArea extends PureComponent {

  componentDidMount() {
    this.props.onPersonalAreaRequest();
  }

  render() {
    if(this.props.personalArea.isLoading) return (<h1>Loading data...</h1>);
    if(this.props.personalArea.error) return (<h1>{this.props.personalArea.payload}</h1>);

    const userInformation = this.props.personalArea.payload;

    return (
      <div className="personal">
        <div className="personal__content">
          <div className="personal__row">
            <div className="personal__label">Id</div>
            <div className="personal__field">{userInformation._id}</div>
          </div>
          <div className="personal__row">
            <div className="personal__label">Name</div>
            <div className="personal__field">{userInformation.name}</div>
          </div>
          <div className="personal__row">
            <div className="personal__label">Surname</div>
            <div className="personal__field">{userInformation.surname}</div>
          </div>
          <div className="personal__row">
            <div className="personal__label">E-mail</div>
            <div className="personal__field">{userInformation.email}</div>
          </div>
          <div className="personal__row">
            <div className="personal__label">Phone number</div>
            <div className="personal__field">{userInformation.phoneNumber}</div>
          </div>
        </div>
      </div>
    );      
  }
}

export default PersonalArea;