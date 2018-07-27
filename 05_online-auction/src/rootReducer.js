import { combineReducers } from 'redux';
import homePage from '@/pages/HOME_PAGE/reducers';
import bidsPage from '@/pages/BIDS_PAGE/reducers';
import shared from '@/shared/reducers';

const appReducers = combineReducers({
  personalArea: homePage.personalArea,
  lots: bidsPage.lots,
  auth: shared.auth,
  reg: shared.reg,
});

export default appReducers;