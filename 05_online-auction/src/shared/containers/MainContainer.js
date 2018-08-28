import { connect } from 'react-redux';
import Main from '../components/Main';
import {
  userAuthorizedSuccessful,
  userLogOut,
} from '../actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  onUserAuthorizedSuccessful: userAuthorizedSuccessful,
  onLogOut: userLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);