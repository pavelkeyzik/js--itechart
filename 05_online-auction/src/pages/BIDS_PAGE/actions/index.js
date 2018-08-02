import * as actionType from './actions';
import lots from '@/shared/data/lots';

export const initLoadingLots = () => (dispatch) => {

  dispatch({type: actionType.LOTS_REQUESTED});

  // To simulate server delay
  setTimeout(() => dispatch({
    type: actionType.LOTS_LOADED_SUCCESSFUL,
    payload: lots,
  }), 1400);
};

export const lotsLoaded = (data) => ({
  type: actionType.LOTS_LOADED_SUCCESSFUL,
  payload: data,
});