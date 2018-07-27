import * as actionType from '../actions/actions';

const initialState = {
  token: null,
};

const registerReducer = (state = initialState, action) => {
  switch(action.type) {
  case actionType.USER_REGISTERED_SUCCESSFUL:
    return {...state, token: 'unique_token:1233'};
  default:
    return state;
  }
};

export default registerReducer;