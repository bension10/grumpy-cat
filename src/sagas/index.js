import { all } from 'redux-saga/effects';

import breedSaga, { watchBreedImagesSaga, watchBreedDetailsSaga } from './breedSagas';

export default function* rootSagas() {
  yield all([
    breedSaga(),
    watchBreedImagesSaga(),
    watchBreedDetailsSaga()
  ]);
}
