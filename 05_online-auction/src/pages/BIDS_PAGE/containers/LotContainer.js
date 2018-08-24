import { connect } from 'react-redux';
import Lot from '../components/Lot';
import {
  lotRise,
  onLoteRemove,
} from '../actions';

const mapStateToProps = (state) => ({
  lot: state.lot,
});

const mapDispatchToProps = {
  onLotRise: lotRise,
  onLoteRemove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lot);