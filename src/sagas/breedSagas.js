import { call, takeLatest, put } from 'redux-saga/effects';
import CATS_API from '../api'
import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREED_IMAGES,
  GET_BREED_IMAGES_SUCCESS
} from '../constants/breeds';

function* getBreeds() {
  try {
    const response = yield call(CATS_API.getData, 'breeds');
    yield put({
      type: GET_BREEDS_SUCCESS,
      payload: response
    });
  } catch (e) {
    console.log(e)
  }
};

export default function* watchBreedSaga() {
  yield takeLatest(GET_BREEDS, getBreeds);
}

function* getBreedImages(action) {
  const { id, page } = action.params;
  const query = `images/search?page=${page}&limit=10&breed_id=${id}`;
  
  try {
    const response = yield call(CATS_API.getData, query);
    yield put({
      type: GET_BREED_IMAGES_SUCCESS,
      payload: response,
      id
    });
  } catch (e) {
      console.log(e)
  }
}

export function* watchBreedImagesSaga() {
  yield takeLatest(GET_BREED_IMAGES, getBreedImages);
}