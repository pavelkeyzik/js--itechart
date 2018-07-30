import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Authorization from '../components/Authorization';

import {
  userAuthorizedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userAuthorizedSuccessful,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);