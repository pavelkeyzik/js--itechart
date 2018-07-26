import { connect } from 'react-redux';
import Lots from '../components/Lots';
import { bindActionCreators } from 'redux';
import {
  initLoadingLots,
  lotsLoaded,
} from '../actions';

const mapStateToProps = (state) => ({
  lots: state.lots,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  initLoadingLots,
  lotsLoaded,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lots);