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
    
    [actionType.UPDATE_LOTE]: (state, action) => {
      const newPayload = state.payload.map(i => {
        if(i._id === action.payload._id) {
          i.current_bid = action.payload.current_bid;
        }
        return i;
      })

      return {
        ...state,
        payload: newPayload,
      }
    },
  },
  initialState
);

export default lotsReducer;