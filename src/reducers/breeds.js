import { handleActions } from 'redux-actions';
import uniqBy from 'lodash/uniqBy';
import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREED_IMAGES,
  GET_BREED_IMAGES_SUCCESS,
  GET_BREED_DETAILS,
  GET_BREED_DETAILS_SUCCESS,
  CLEAR_BREED_IMAGES
} from '../constants/breeds';

const initialState = {
  isLoading: false,
  data: []
};
const initialBreedImagesById = {
  isLoading: false,
  data: []
}
const initialBreedDetails = {
  isLoading: false,
  data: {}
};

export const breeds = handleActions(
  {
    [GET_BREEDS]: (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    },
    [GET_BREEDS_SUCCESS]: (state, action) => (
      {
        ...state,
        isLoading: false,
        data: action.payload
      }
    )
  },
  initialState
);

export const selectedBreedImages = handleActions(
  {
    [GET_BREED_IMAGES]: state => {
      return {
        ...state,
        isLoading: true
      }
    },
    [GET_BREED_IMAGES_SUCCESS]: (state, action) => {
      const { payload } = action;
      let dataSet;
      if(state.data) {
        dataSet = uniqBy(state.data.concat(payload), 'id');
      } else {
        dataSet = payload;
      } 
      
      return {
        ...state,
        isLoading: false,
        data: [...dataSet]
      }
    }, 
    [CLEAR_BREED_IMAGES]: (state, action) => {
      return initialBreedImagesById;
    },
  }, 
  initialBreedImagesById
);

export const breedDetails = handleActions(
  {
    [GET_BREED_DETAILS]: (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    },
    [GET_BREED_DETAILS_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
  },
  initialBreedDetails
);
