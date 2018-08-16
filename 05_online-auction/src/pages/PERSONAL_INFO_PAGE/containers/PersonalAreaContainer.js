import { connect } from 'react-redux';
import PersonalArea from '../components/PersonalArea';
import {
  personalAreaRequest,
  personalAreaRequested,
  personalAreaLoadedError,
  personalAreaLoadedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  personalArea: state.personalArea,
});

const mapDispatchToProps = {
  onPersonalAreaRequest: personalAreaRequest,
  onPersonalAreaRequested: personalAreaRequested,
  onPersonalAreaLoadedError: personalAreaLoadedError,
  onPersonalAreaLoadedSuccessful: personalAreaLoadedSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);