import actionType from './actions';
import { createAction } from 'redux-action';

export const userAuthorizedSuccessful = createAction(
  actionType.USER_AUTHORIZED_SUCCESSFUL,
);

export const userRegistredSuccessful = createAction(
  actionType.USER_REGISTERED_SUCCESSFUL,
);