import * as actionType from './actions';

export const userAuthorizedSuccessful = (info) => ({
  type: actionType.USER_AUTHORIZED_SUCCESSFUL,
  payload: info
});