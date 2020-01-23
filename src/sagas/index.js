import { all } from 'redux-saga/effects';

import breedSaga, { watchBreedImagesSaga } from './breedSagas';

export default function* rootSagas() {
  yield all([
    breedSaga(),
    watchBreedImagesSaga()
  ]);
}
