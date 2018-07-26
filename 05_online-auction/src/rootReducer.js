import { combineReducers } from 'redux';
import homePage from '@/pages/HOME_PAGE/reducers';

const appReducers = combineReducers({
  personalArea: homePage.personalArea
});

export default appReducers;