import React from 'react';
import './index.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {personalAreaIsLoading, personalAreaIsLoaded} from '@/actions';
import userInfo from '@/shared/data/personalUserInfo';

class PersonalArea extends React.Component {

  componentWillMount() {
    this.props.personalAreaIsLoading();
    this.props.personalAreaIsLoaded(userInfo);
  }

  render() {
    if(this.props.personalArea.isLoading) return (<h1>Loading data...</h1>);

    const {userInformation} = this.props.personalArea;
    return (
      <div className="personal">
        <div className="personal__content">
          <div className="personal__row">
            <div className="personal__label">Id</div>
            <div className="personal__field">{userInformation.id}</div>
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

const mapStateToProps = (state) => {
  return {
    personalArea: state.personalArea
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  personalAreaIsLoading,
  personalAreaIsLoaded,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);