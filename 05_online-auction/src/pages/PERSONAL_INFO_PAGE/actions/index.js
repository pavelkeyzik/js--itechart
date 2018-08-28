import typeAction from './actions';
import { createAction } from 'redux-action';
import Api from '@/shared/utils/Api';

export const personalAreaRequest = () => dispatch => {
  dispatch(personalAreaRequested());

  Api.getPersonalInfo()
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res);
      }

      return res.json();
    })
    .then(information => dispatch(personalAreaLoadedSuccessful(information)))
    .catch(err => {
      dispatch(personalAreaLoadError(err.status))
    });
}

export const personalAreaRequested = createAction(
  typeAction.PERSONAL_AREA_REQUESTED,
);

export const personalAreaLoadError = createAction(
  typeAction.PERSONAL_AREA_LOAD_ERROR,
);

export const personalAreaLoadedSuccessful = createAction(
  typeAction.PERSONAL_AREA_LOADED_SUCCESSFUL,
  information => information,
);