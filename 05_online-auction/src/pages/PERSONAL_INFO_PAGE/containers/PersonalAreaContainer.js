import { connect } from 'react-redux';
import PersonalArea from '../components/PersonalArea';
import {
  personalAreaRequest,
  personalAreaRequested,
  personalAreaLoadError,
  personalAreaLoadedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  personalArea: state.personalArea,
});

const mapDispatchToProps = {
  onPersonalAreaRequest: personalAreaRequest,
  onPersonalAreaRequested: personalAreaRequested,
  onPersonalAreaLoadError: personalAreaLoadError,
  onPersonalAreaLoadedSuccessful: personalAreaLoadedSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);