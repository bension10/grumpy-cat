import { all } from 'redux-saga/effects';

import breedSaga from './breedSagas';

export default function* rootSagas() {
  yield all([
    breedSaga(),
  ]);
}
