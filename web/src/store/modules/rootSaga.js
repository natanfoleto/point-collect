import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
// import collector from './collector/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}