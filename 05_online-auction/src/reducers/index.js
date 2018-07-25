import { combineReducers } from 'redux';
import personalArea from '@/reducers/personalArea';

const appReducers = combineReducers({
  personalArea
});

export default appReducers;