import * as typeAction from '../actions/actions';

const personalAreaReducer = (state = {isLoading: true}, action) => {
  switch (action.type) {
  case typeAction.PERSONAL_AREA_IS_LOADING:
    return {...state, isLoading: true};
  case typeAction.PERSONAL_AREA_IS_LOADED:
    return {...state, userInformation: action.payload, isLoading: false};
  default:
    return state;
  }
};

export default personalAreaReducer;