import typeAction from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: true,
};

const personalAreaReducer = handleActions(
  {
    [typeAction.PERSONAL_AREA_IS_LOADING]: state => ({
      ...state,
      isLoading: true,
    }),

    [typeAction.PERSONAL_AREA_IS_LOADED]: (state, action) => ({
      ...state,
      userInformation: action.payload,
      isLoading: false,
    })
  },
  initialState
);

export default personalAreaReducer;