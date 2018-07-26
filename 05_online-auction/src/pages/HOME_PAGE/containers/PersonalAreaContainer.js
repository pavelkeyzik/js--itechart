import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonalArea from '../components/PersonalArea';
import {personalAreaIsLoading, personalAreaIsLoaded} from '../actions';

const mapStateToProps = (state) => ({
  personalArea: state.personalArea,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  personalAreaIsLoading,
  personalAreaIsLoaded,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);