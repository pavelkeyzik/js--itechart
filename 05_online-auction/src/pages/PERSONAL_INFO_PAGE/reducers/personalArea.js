import typeAction from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: true,
};

const personalAreaReducer = handleActions(
  {
    [typeAction.PERSONAL_AREA_REQUESTED]: state => ({
      ...state,
      isLoading: true,
    }),

    [typeAction.PERSONAL_AREA_LOADED_SUCCESSFUL]: (state, action) => ({
      ...state,
      payload: action.payload,
      isLoading: false,
    })
  },
  initialState
);

export default personalAreaReducer;