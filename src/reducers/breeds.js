import { handleActions } from 'redux-actions';
import { GET_BREEDS, GET_BREEDS_SUCCESS } from '../constants/breeds';

const initialState = {
  isLoading: false,
  breeds: []
};

const breeds = handleActions(
  {
    [GET_BREEDS]: (state, action) => {
      console.log('GET_BREEDS', action);
      return {
        ...state,
        isLoading: true
      }
    },
    [GET_BREEDS_SUCCESS]: (state, action) => {
      console.log('GET_BREEDS_SUCCESS', action);
      return {
        ...state,
        isLoading: false,
        breeds: action.payload
      }
    }
  },
  initialState
);

export default breeds;