import actionType from './actions';
import { createAction } from 'redux-action';
import Api from '../utils/Api';
import { createHashHistory } from 'history';
const history = createHashHistory();

export const userAuthorizationRequest = data => dispatch => {
  dispatch(userAuthorizationRequested());

  Api.login(data)
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        return dispatch(userAuthorizationError(data.message));
      }
      localStorage.setItem('authorizedUserToken', JSON.stringify(data.token));
      dispatch(userAuthorizedSuccessful(data));
    })
    .catch(err => {
      dispatch(userAuthorizationError(err));
    });
};

export const userLogOut = () => dispatch => {
  localStorage.clear();
  dispatch(userLoggedOuted());
  history.push('/');
};

export const userAuthorizationRequested = createAction(
  actionType.USER_AUTHORIZATION_REQUESTED
);

export const userAuthorizationError = createAction(
  actionType.USER_AUTHORIZATION_ERROR,
  error => error
);

export const userAuthorizedSuccessful = createAction(
  actionType.USER_AUTHORIZED_SUCCESSFUL,
  token => token
);

export const userRegistredSuccessful = createAction(
  actionType.USER_REGISTERED_SUCCESSFUL
);

export const userLoggedOuted = createAction(
  actionType.USER_LOGGED_OUT
);
