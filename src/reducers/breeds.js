import { handleActions } from 'redux-actions';
import { GET_BREEDS } from '../actions/breeds';

const initialState = {
  isLoading: false,
  breeds: []
};

const breeds = handleActions(
  {
    [GET_BREEDS](state, action) {
      return {
        isLoading: true,
        breeds: action.payload
      }
    }
  },
  initialState
);

export default breeds;