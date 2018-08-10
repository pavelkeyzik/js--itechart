import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  error: null,
};

const lotsReducer = handleActions(
  {
    [actionType.LOTS_REQUESTED]: state => ({
      ...state,
      error: null,
      isLoading: true
    }),

    [actionType.LOTS_LOADED_SUCCESSFUL]: (state, action) => ({
      ...state,
      isLoading: false,
      error: null,
      payload: action.payload,
    }),

    [actionType.LOTS_LOAD_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      payload: action.payload,
    }),
  },
  initialState
);

export default lotsReducer;