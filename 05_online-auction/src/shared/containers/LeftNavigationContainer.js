import { connect } from "react-redux";
import LeftNavigation from "../components/LeftNavigation";
import { userLogOut } from "../actions";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  onLogOut: userLogOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(LeftNavigation);
