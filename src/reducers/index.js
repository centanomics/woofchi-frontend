import { combineReducers } from 'redux';

import woofchiReducer from './woofchiReducer';

export default combineReducers({
  woofChi: woofchiReducer,
});
