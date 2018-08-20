import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  error: null,
};

const lotReducer = handleActions(
  {
    [actionType.LOT_RISE_OF_FIVE_REQUESTED]: state => ({
      ...state,
      error: null,
      isLoading: true
    }),

    [actionType.LOT_RISE_OF_FIVE_SUCCESSFUL]: (state, action) => ({
      ...state,
      isLoading: false,
      error: null,
      payload: action.payload,
    }),

    [actionType.LOT_RISE_OF_FIVE_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      payload: action.payload,
    }),
  },
  initialState
);

export default lotReducer;