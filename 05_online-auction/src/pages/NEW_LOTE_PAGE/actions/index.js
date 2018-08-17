import actionType from './actions';
import { createAction } from 'redux-actions';
import Api from '@/shared/utils/Api';
import config from '@/config';

export const newLoteSend = values => dispatch => {
  dispatch(newLoteSended());

  Api.addNewLote(values)
    .then(() => dispatch(newLoteSendedSuccessful()))
    .catch(err => dispatch(newLoteSendedError(err)));
}

export const newLoteSended = createAction(
  actionType.NEW_LOTE_SENDED,
);

export const newLoteSendedSuccessful = createAction(
  actionType.NEW_LOTE_SENDED_SUCCESSFUL,
);

export const newLoteSendedError = createAction(
  actionType.NEW_LOTE_SENDED_ERROR,
  error => error
);