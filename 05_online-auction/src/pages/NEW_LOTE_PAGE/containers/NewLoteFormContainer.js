import { connect } from 'react-redux';
import NewLoteForm from '../components/NewLoteForm';
import {
  newLoteSend,
  newLoteSendedSuccessful,
} from '../actions';

const mapStateToProps = (state) => ({
  newLot: state.newLot,
});

const mapDispatchToProps = {
  onNewLoteSend: newLoteSend,
  onNewLoteSendedSuccessful: newLoteSendedSuccessful,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLoteForm);