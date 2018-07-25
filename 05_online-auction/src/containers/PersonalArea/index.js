import React from 'react';
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
      <div>
        <h1>Personal Area Page</h1>
        <table>
          <tbody>
            <tr>
              <th>Поле</th>
              <th>Значение</th>
            </tr>
            <tr>
              <td>ID</td>
              <td>{userInformation.id}</td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>{userInformation.name}</td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{userInformation.surname}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{userInformation.email}</td>
            </tr>
            <tr>
              <td>Номер телефона</td>
              <td>{userInformation.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
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