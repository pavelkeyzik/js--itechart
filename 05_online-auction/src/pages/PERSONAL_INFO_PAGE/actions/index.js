import typeAction from './actions';
import { createAction } from 'redux-action';

export const personalAreaIsLoading = createAction(
  typeAction.PERSONAL_AREA_IS_LOADING,
);

export const personalAreaIsLoaded = createAction(
  typeAction.PERSONAL_AREA_IS_LOADED,
  information => information,
);