import { connect } from 'react-redux';
import Authorization from '../components/Authorization';

import {
  userAuthorizedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  onUserAuthorizedSuccessful: userAuthorizedSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);