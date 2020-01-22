import { handleActions } from 'redux-actions';
import { GET_BREEDS, GET_BREEDS_SUCCESS } from '../constants/breeds';

const initialState = {
  isLoading: false,
  data: []
};

const breeds = handleActions(
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

export default breeds;