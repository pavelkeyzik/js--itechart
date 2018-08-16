import typeAction from './actions';
import { createAction } from 'redux-action';
import Api from '@/shared/utils/Api';

export const personalAreaRequest = () => dispatch => {
  dispatch(personalAreaRequested());

  Api.getPersonalInfo()
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.json(d => d.message));
      }

      return res.json();
    })
    .then(information => dispatch(personalAreaLoadedSuccessful(information)))
    .catch(err => dispatch(personalAreaLoadedError(err.message)));
}

export const personalAreaRequested = createAction(
  typeAction.PERSONAL_AREA_REQUESTED,
);

export const personalAreaLoadedError = createAction(
  typeAction.PERSONAL_AREA_LOADED_ERROR,
);

export const personalAreaLoadedSuccessful = createAction(
  typeAction.PERSONAL_AREA_LOADED_SUCCESSFUL,
  information => information,
);