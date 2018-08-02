import * as actionType from './actions';
import lots from '@/shared/data/lots';

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
        error: '404 Error. Not found data',
      });
    }
  }, 1400);
  
};

export const lotsLoaded = (data) => ({
  type: actionType.LOTS_LOADED_SUCCESSFUL,
  payload: data,
});

export const lotsLoadError = (error) => ({
  type: actionType.LOTS_LOAD_ERROR,
  error,
});