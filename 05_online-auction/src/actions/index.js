import * as typeAction from '@/actions/actions';

export const personalAreaIsLoading = () => {
  return {
    type: typeAction.PERSONAL_AREA_IS_LOADING,
  }
}

export const personalAreaIsLoaded = (information) => {
  return {
    type: typeAction.PERSONAL_AREA_IS_LOADED,
    payload: information,
  }
}