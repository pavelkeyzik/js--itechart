import { combineReducers } from 'redux';
import homePage from '@/pages/HOME_PAGE/reducers';
import bidsPage from '@/pages/BIDS_PAGE/reducers';

const appReducers = combineReducers({
  personalArea: homePage.personalArea,
  lots: bidsPage.lots,
});

export default appReducers;