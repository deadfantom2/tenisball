import {
  TENIS_LIST_REQUEST,
  TENIS_LIST_SUCCESS,
  TENIS_LIST_FAIL,
  TENIS_LIST_RESET,
} from '../constants/tenisConstants';

export const tenisesListReducer = (state = { tenisesList: [] }, action) => {
  switch (action.type) {
    case TENIS_LIST_REQUEST:
      return { loading: true, tenisesList: [] };
    case TENIS_LIST_SUCCESS:
      return { ...state, loading: false, tenisesList: action.payload };
    case TENIS_LIST_FAIL:
      return { loading: false, tenisesList: [] };

    default:
      return state;
  }
};
