import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  token: null,
  registered: false,
  error: false,
};

const registerReducer = handleActions(
  {
    [actionType.USER_REGISTERED_SUCCESSFUL]: (state, action) => {
      const { token } = action.payload;
      return {
        ...state,
        token,
        error: false,
        registered: true
      };
    },
    [actionType.USER_LOGGED_OUT]: () => initialState,
    [actionType.USER_REGISTRATION_ERROR]: (state, action) => {
      return {
        ...state,
        registered: false,
        error: action.payload
      };
    }
  },
  initialState
);

export default registerReducer;