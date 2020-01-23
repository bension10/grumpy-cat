import { combineReducers } from 'redux';
import breeds, { breedsImagesById } from './breeds';

export default combineReducers({
  breeds,
  breedsImagesById
});