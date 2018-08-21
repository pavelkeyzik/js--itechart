import actionType from './actions';
import { createAction } from 'redux-actions';
import Api from '@/shared/utils/Api';

export const newLoteSend = values => dispatch => {
  dispatch(newLoteSended());

  Api.addNewLote(values)
    .then((data) => data.json().then(d => dispatch(newLoteSendedSuccessful(d))))
    .catch(err => dispatch(newLoteSendedError(err)));
}

export const newLoteSended = createAction(
  actionType.NEW_LOTE_SENDED,
);

export const newLoteSendedSuccessful = createAction(
  actionType.NEW_LOTE_SENDED_SUCCESSFUL,
  data => data,
);

export const newLoteSendedError = createAction(
  actionType.NEW_LOTE_SENDED_ERROR,
  error => error
);