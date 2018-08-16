import { connect } from 'react-redux';
import Authorization from '../components/Authorization';

import {
  userAuthorizedSuccessful,
  userAuthorizationRequested,
  userAuthorizationError,
  userAuthorizationRequest
} from '../actions';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  onUserAuthorizedSuccessful: userAuthorizedSuccessful,
  onUserAuthorizationRequested: userAuthorizationRequested,
  onUserAuthorizationError: userAuthorizationError,
  onUserAuthorizationRequest: userAuthorizationRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorization);
