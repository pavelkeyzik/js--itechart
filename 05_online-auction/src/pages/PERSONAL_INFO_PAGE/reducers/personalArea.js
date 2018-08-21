import typeAction from '../actions/actions';
import { handleActions } from 'redux-actions';

const initialState = {
  isLoading: true,
  error: null,
};

const personalAreaReducer = handleActions(
  {
    [typeAction.PERSONAL_AREA_REQUESTED]: state => ({
      ...state,
      isLoading: true,
      error: false,
    }),

    [typeAction.PERSONAL_AREA_LOADED_SUCCESSFUL]: (state, action) => ({
      ...state,
      payload: action.payload,
      isLoading: false,
      error: false,
    }),

    [typeAction.PERSONAL_AREA_LOAD_ERROR]: (state, action) => ({
      ...state,
      payload: action.payload,
      isLoading: false,
      error: true,
    })
  },
  initialState
);

export default personalAreaReducer;