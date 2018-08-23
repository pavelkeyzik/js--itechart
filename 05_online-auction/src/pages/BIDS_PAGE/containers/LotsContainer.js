import { connect } from 'react-redux';
import Lots from '../components/Lots';
import {
  initLoadingLots,
  lotsLoaded,
  socketConnectionClose,  
} from '../actions';

const mapStateToProps = (state) => ({
  lots: state.lots,
});

const mapDispatchToProps = {
  onInitLoadingLots: initLoadingLots,
  onLotsLoaded: lotsLoaded,
  onSocketConnectionClose: socketConnectionClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lots);