import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS
} from '../constants/breeds';

export const getBreeds = () => {
  return { type: GET_BREEDS };
};

export const loadBreeds = (payload) => {
  console.log('loadBreeds');
  return { type: GET_BREEDS_SUCCESS, payload };
};