import * as actionType from './actions';

export const initLoadingLots = () => {
  return {
    type: actionType.INIT_LOADING_LOTS,
  }
};

export const lotsLoaded = (data) => ({
  type: actionType.LOTS_LOADED_SUCCESSFUL,
  payload: data,
});