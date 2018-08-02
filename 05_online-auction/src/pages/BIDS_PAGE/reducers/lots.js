import * as actionType from '../actions/actions';

const initialState = {
  isLoading: false,
};

const lotsReducer = (state = initialState, action) => {
  switch(action.type) {
  case actionType.LOTS_REQUESTED:
    return {
      ...state,
      isLoading: true
    };
  case actionType.LOTS_LOADED_SUCCESSFUL:
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  case actionType.LOTS_LOAD_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  default:
    return state;
  }
}

export default lotsReducer;