import { call, takeLatest, put } from 'redux-saga/effects';
import CATS_API from '../api'
import { GET_BREEDS, GET_BREEDS_SUCCESS } from '../constants/breeds';

function* getBreeds() {
  try {
  const response = yield call(CATS_API.getData, 'breeds');
  yield put({
    type: GET_BREEDS_SUCCESS,
    payload: response
  })
  } catch (e) {
    console.log(e)
  }
};

export default function* watchBreedSaga() {
  yield takeLatest(GET_BREEDS, getBreeds);
}