import { combineReducers } from 'redux';
import {
  breeds,
  selectedBreedImages,
  breedDetails,
} from './breeds';

export default combineReducers({
  breeds,
  selectedBreedImages,
  breedDetails
});