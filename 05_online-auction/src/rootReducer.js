import { combineReducers } from 'redux';
import personalInfoPage from '@/pages/PERSONAL_INFO_PAGE/reducers';
import bidsPage from '@/pages/BIDS_PAGE/reducers';
import shared from '@/shared/reducers';

const appReducers = combineReducers({
  personalArea: personalInfoPage.personalArea,
  lots: bidsPage.lots,
  auth: shared.auth,
  reg: shared.reg,
});

export default appReducers;