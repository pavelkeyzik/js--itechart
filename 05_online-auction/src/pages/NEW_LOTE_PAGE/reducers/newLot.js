import actionType from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  error: null,
  addedSuccessful: false,
};

const newLotReducer = handleActions(
  {
    [actionType.NEW_LOTE_SENDED]: state => ({
      ...state,
      error: null,
      isLoading: true
    }),

    [actionType.NEW_LOTE_SENDED_SUCCESSFUL]: (state, action) => ({
      ...state,
      isLoading: false,
      error: null,
      addedSuccessful: true,
      payload: action.payload,
    }),

    [actionType.NEW_LOTE_SENDED_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      payload: action.payload,
    }),
  },
  initialState
);

export default newLotReducer;