import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  token: null,
}

const authReducer = handleActions(
  {
    [actionType.USER_AUTHORIZED_SUCCESSFUL]: state => ({
      ...state,
      token: 'unique_token:1233'
    })
  },
  initialState
);

export default authReducer;