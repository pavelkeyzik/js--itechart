import actionType from './actions';
import { createAction } from 'redux-action';
import Api from '../utils/Api';
import { createHashHistory } from 'history';
import Cookies from 'js-cookie';

const history = createHashHistory();

export const userAuthorizationRequest = data => dispatch => {
  dispatch(userAuthorizationRequested());

  Api.login(data)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.json(d => d.message));
      }
      return res.json();
    })
    .then(data => {
      if(data.message) {
        return dispatch(userAuthorizationError(data.message));
      }
      localStorage.setItem('authorizedUserToken', JSON.stringify(data.token));
      Cookies.set('Authorization', data.token);
      Api.setHeadersToken(data.token);
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

export const userRegistrationRequest = data => dispatch => {
  dispatch(userRegistrationRequested());

  Api.registration(data)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.json(d => d.message));
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem('authorizedUserToken', JSON.stringify(data.token));
      Cookies.set('Authorization', data.token);
      Api.setHeadersToken(data.token);
      dispatch(userRegistredSuccessful(data));
      history.push('/app');
    })
    .catch(err => {
      return dispatch(userRegistrationError(err))
    });
}

export const userRegistrationRequested = createAction(
  actionType.USER_REGISTRATION_REQUESTED
);

export const userRegistredSuccessful = createAction(
  actionType.USER_REGISTERED_SUCCESSFUL,
  token => token
);

export const userRegistrationError = createAction(
  actionType.USER_REGISTRATION_ERROR,
  error => error
);

export const userLoggedOuted = createAction(
  actionType.USER_LOGGED_OUT
);
