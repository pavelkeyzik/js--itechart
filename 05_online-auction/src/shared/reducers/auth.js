import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  token: null,
  loggedIn: false,
  error: false,
};

const authReducer = handleActions(
  {
    [actionType.USER_AUTHORIZATION_REQUESTED]: () => initialState,

    [actionType.USER_AUTHORIZED_SUCCESSFUL]: (state, action) => {
      const { token } = action.payload;
      return {
        ...state,
        token,
        error: false,
        loggedIn: true
      };
    },
    [actionType.USER_LOGGED_OUT]: () => initialState,
    [actionType.USER_AUTHORIZATION_ERROR]: (state, action) => {
      return {
        ...state,
        loggedIn: false,
        error: action.payload
      };
    }
  },
  initialState
);

export default authReducer;
