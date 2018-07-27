import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/Registration';

import {
  userRegistredSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  reg: state.reg,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userRegistredSuccessful,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);