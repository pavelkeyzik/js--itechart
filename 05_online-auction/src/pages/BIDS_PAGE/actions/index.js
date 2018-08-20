import actionType from './actions';
import { createAction } from 'redux-actions';
import Api from '@/shared/utils/Api';
import config from '@/config';

export const initLoadingLots = () => (dispatch) => {

  dispatch(lotsRequested());

  Api.getBids()
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.json(d => d.message));
      }

      return res.json();
    })
    .then(lots => {
      dispatch(lotsLoaded(lots.map(lot => {
        lot.image_url = `${config.baseApiURL}/${lot.image_url.replace(/\\/g, '/')}`;
        return lot;
      })));
    })
    .catch(err => dispatch(lotsLoadError(err.message)));
};

export const lotsRequested = createAction(
  actionType.LOTS_REQUESTED,
);

export const lotsLoaded = createAction(
  actionType.LOTS_LOADED_SUCCESSFUL,
  lots => lots,
);

export const lotsLoadError = createAction(
  actionType.LOTS_LOADED_SUCCESSFUL,
  error => error,
);

export const lotRise = (id, percent) => (dispatch) => {
  dispatch(lotRiseRequested());

  Api.riseBid(id, percent)
    .then(() => dispatch(lotRiseSuccessful()))
    .catch(err => dispatch(lotRiseError(err)))
};

export const lotRiseRequested = createAction(
  actionType.LOT_RISE_OF_REQUESTED,
);

export const lotRiseSuccessful = createAction(
  actionType.LOT_RISE_OF_SUCCESSFUL,
);

export const lotRiseError = createAction(
  actionType.LOT_RISE_OF_ERROR,
  error => error,
);