import * as actionType from './actions';

export const userAuthorizedSuccessful = (info) => ({
  type: actionType.USER_AUTHORIZED_SUCCESSFUL,
  payload: info
});

export const userRegistredSuccessful = () => ({
  type: actionType.USER_REGISTERED_SUCCESSFUL,
});