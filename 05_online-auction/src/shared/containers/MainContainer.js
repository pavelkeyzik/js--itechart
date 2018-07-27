import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import {
  userAuthorizedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userAuthorizedSuccessful,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);