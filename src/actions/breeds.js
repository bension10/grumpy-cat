import {
  GET_BREEDS,
  GET_BREED_IMAGES,
  GET_BREED_DETAILS,
  CLEAR_BREED_IMAGES
} from '../constants/breeds';

export const getBreeds = () => {
  return { type: GET_BREEDS };
};

export const getBreedImages = params => {
  return {
    type: GET_BREED_IMAGES,
    params
  }
};

export const getBreedDetails = params => {
  return {
    type: GET_BREED_DETAILS,
    params
  }
};

export const clearBreedImages = () => {
  return {
    type: CLEAR_BREED_IMAGES
  }
}