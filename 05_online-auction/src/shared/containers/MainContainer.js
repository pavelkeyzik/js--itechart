import { connect } from 'react-redux';
import Main from '../components/Main';
import {
  userAuthorizedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  onUserAuthorizedSuccessful: userAuthorizedSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);