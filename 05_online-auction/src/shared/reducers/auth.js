import * as actionType from '../actions/actions';

const initialState = {
  isAuthorized: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
  case actionType.USER_AUTHORIZED_SUCCESSFUL:
    return {...state, isAuthorized: true};
  default:
    return state;
  }
};

export default authReducer;