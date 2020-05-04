import { combineReducers } from 'redux';

import auth from './auth/reducer';
import collector from './collector/reducer';

export default combineReducers({
  auth,
  collector,
});