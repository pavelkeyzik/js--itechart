import { connect } from 'react-redux';
import Lot from '../components/Lot';
import {
  lotRise,
} from '../actions';

const mapStateToProps = (state) => ({
  lot: state.lot,
});

const mapDispatchToProps = {
  onLotRise: lotRise,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lot);