import { combineReducers } from 'redux';
import personalInfoPage from './pages/PERSONAL_INFO_PAGE/reducers';
import bidsPage from './pages/BIDS_PAGE/reducers';
import newLotePage from './pages/NEW_LOTE_PAGE/reducers';
import shared from './shared/reducers';

const appReducers = combineReducers({
  personalArea: personalInfoPage.personalArea,
  lots: bidsPage.lots,
  newLot: newLotePage.newLot,
  auth: shared.auth,
  reg: shared.reg,
});

export default appReducers;