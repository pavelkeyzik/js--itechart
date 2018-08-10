import { connect } from 'react-redux';
import Registration from '../components/Registration';

import {
  userRegistredSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  reg: state.reg,
});

const mapDispatchToProps = {
  onUserRegistredSuccessful: userRegistredSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);