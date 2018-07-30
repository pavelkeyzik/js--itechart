import * as actionType from '../actions/actions';

const initialState = {
  token: null,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
  case actionType.USER_AUTHORIZED_SUCCESSFUL:
    return {...state, token: 'unique_token:1233'};
  default:
    return state;
  }
};

export default authReducer;