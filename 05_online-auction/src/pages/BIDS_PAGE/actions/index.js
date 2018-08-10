import actionType from './actions';
import lots from '@/shared/data/lots';
import { createAction } from 'redux-actions';

export const initLoadingLots = () => (dispatch) => {

  dispatch({type: actionType.LOTS_REQUESTED});

  // To simulate server delay
  setTimeout(() => {
    if(lots) {
      dispatch({
        type: actionType.LOTS_LOADED_SUCCESSFUL,
        payload: lots,
      });
    } else {
      dispatch({
        type: actionType.LOTS_LOAD_ERROR,
        payload: '404 Error. Not found data',
      });
    }
  }, 1400);
  
};

export const lotsLoaded = createAction(
  actionType.LOTS_LOADED_SUCCESSFUL,
  lots => lots,
);

export const lotsLoadError = createAction(
  actionType.LOTS_LOADED_SUCCESSFUL,
  error => error,
);