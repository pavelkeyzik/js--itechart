import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  token: null,
  loggedIn: false,
  error: false,
  isLoading: false,
};

const authReducer = handleActions(
  {
    [actionType.USER_AUTHORIZATION_REQUESTED]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actionType.USER_AUTHORIZED_SUCCESSFUL]: (state, action) => {
      const { token } = action.payload;
      return {
        ...state,
        token,
        error: false,
        loggedIn: true,
        isLoading: false,
      };
    },
    [actionType.USER_LOGGED_OUT]: () => initialState,
    [actionType.USER_AUTHORIZATION_ERROR]: (state, action) => {
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        isLoading: false,
      };
    }
  },
  initialState
);

export default authReducer;
