import { combineReducers } from 'redux';
import {
  breeds,
  breedsImagesById,
  breedDetails,
} from './breeds';

export default combineReducers({
  breeds,
  breedsImagesById,
  breedDetails
});