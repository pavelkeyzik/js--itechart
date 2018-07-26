import * as actionType from '../actions/actions';

const initialState = {
  isLoading: false,
};

const lotsReducer = (state = initialState, action) => {
  switch(action.type) {
  case actionType.INIT_LOADING_LOTS:
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
  default:
    return state;
  }
}

export default lotsReducer;