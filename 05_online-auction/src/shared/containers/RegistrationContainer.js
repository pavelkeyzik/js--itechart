import { connect } from 'react-redux';
import Registration from '../components/Registration';

import {
  userRegistredSuccessful,
  userRegistrationRequested,
  userRegistrationError,
  userRegistrationRequest,
} from '../actions';

const mapStateToProps = (state) => ({
  reg: state.reg,
});

const mapDispatchToProps = {
  onUserRegistredSuccessful: userRegistredSuccessful,
  onUserRegistrationRequested: userRegistrationRequested,
  onUserRegistrationError: userRegistrationError,
  onUserRegistrationRequest: userRegistrationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);