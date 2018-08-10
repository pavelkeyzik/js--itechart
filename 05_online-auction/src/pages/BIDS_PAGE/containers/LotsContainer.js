import { connect } from 'react-redux';
import Lots from '../components/Lots';
import {
  initLoadingLots,
  lotsLoaded,
} from '../actions';

const mapStateToProps = (state) => ({
  lots: state.lots,
});

const mapDispatchToProps = {
  onInitLoadingLots: initLoadingLots,
  onLotsLoaded: lotsLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lots);