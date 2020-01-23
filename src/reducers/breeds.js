import { handleActions } from 'redux-actions';
import uniqBy from 'lodash/uniqBy';
import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREED_IMAGES,
  GET_BREED_IMAGES_SUCCESS,
  GET_BREED_DETAILS,
  GET_BREED_DETAILS_SUCCESS
} from '../constants/breeds';

const initialState = {
  isLoading: false,
  data: []
};
const initialBreedImagesById = {
  isLoading: false,
  data: {}
}
const initialBreedDetails = {
  isLoading: false,
  data: {}
};

export const breeds = handleActions(
  {
    [GET_BREEDS]: (state, action) => (
      {
        ...state,
        isLoading: true
      }
    ),
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

export const breedsImagesById = handleActions(
  {
    [GET_BREED_IMAGES]: (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    },
    [GET_BREED_IMAGES_SUCCESS]: (state, action) => {
      const { id, payload } = action;
      let dataSet;
      if(state.data[id]) {
        dataSet = state.data[id].concat(payload)
      } else {
        dataSet = payload;
      }

      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [id]: uniqBy(dataSet, 'id')
        }
      }
    }
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
