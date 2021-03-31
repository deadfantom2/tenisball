import {
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
} from '../constants/imageConstants';

export const deleteImageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_IMAGE_REQUEST:
      return { loading: true };
    case DELETE_IMAGE_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_IMAGE_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
