import actionType from './actions';
import { createAction } from 'redux-actions';
import Api from '@/shared/utils/Api';
import config from '@/config';
let socket;

export const initLoadingLots = () => (dispatch) => {
  socket = new WebSocket(config.bidsWebSocketURL);
  
  socket.addEventListener('message', (ev) => {
    const data = JSON.parse(ev.data);
    dispatch(updateLote(data));
  });

  dispatch(lotsRequested());

  Api.getBids()
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res);
      }

      return res.json();
    })
    .then(lots => {
      dispatch(lotsLoaded(lots.map(lot => {
        lot.image_url = `${config.baseApiURL}/${lot.image_url.replace(/\\/g, '/')}`;
        return lot;
      })));
    })
    .catch(err => {
      dispatch(lotsLoadError(err.status))
    });
};

export const lotsRequested = createAction(
  actionType.LOTS_REQUESTED,
);

export const lotsLoaded = createAction(
  actionType.LOTS_LOADED_SUCCESSFUL,
  lots => lots,
);

export const lotsLoadError = createAction(
  actionType.LOTS_LOAD_ERROR,
  error => error,
);

export const lotRise = (id, percent) => (dispatch) => {
  dispatch(lotRiseRequested());

  Api.riseBid(id, percent)
    .then(() => {
      socket.send(JSON.stringify({ id }))
      dispatch(lotRiseSuccessful());
    })
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

export const updateLote = createAction(
  actionType.UPDATE_LOTE,
  data => data,
);

export const socketConnectionClose = () => dispatch => {
  socket.close();
}

export const onLoteRemove = id => dispatch => {
  dispatch(loteRemoveRequested(id));

  Api.removeLote(id)
    .then((res) => {
      res.json().then(data => {
        dispatch(loteRemoveSuccessful(data.data));
      })
    })
    .catch(err => console.log('REMOVED ERROR', err))
};

export const loteRemoveRequested = createAction(
  actionType.REMOVE_LOTE_REQUESTED,
  id => id,
);

export const loteRemoveSuccessful = createAction(
  actionType.REMOVE_LOTE_SUCCESSFUL,
  data => data
);