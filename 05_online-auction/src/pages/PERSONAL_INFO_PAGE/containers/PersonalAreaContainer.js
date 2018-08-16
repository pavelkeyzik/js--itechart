import { connect } from 'react-redux';
import PersonalArea from '../components/PersonalArea';
import {personalAreaIsLoading, personalAreaIsLoaded} from '../actions';

const mapStateToProps = (state) => ({
  personalArea: state.personalArea,
});

const mapDispatchToProps = {
  onPersonalAreaLoading: personalAreaIsLoading,
  onPersonalAreaLoaded: personalAreaIsLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);