import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_ONE_REQUEST,
  POST_ONE_SUCCESS,
  POST_ONE_FAIL,
  POST_ONE_RESET,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_RESET,
} from '../constants/postConstants';

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, posts: [] };
    default:
      return state;
  }
};

export const postOneReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_ONE_REQUEST:
      return { loading: true };
    case POST_ONE_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_ONE_FAIL:
      return { loading: false };
    case POST_ONE_RESET:
      return { loading: false };
    default:
      return state;
  }
};

export const addPostReducer = (state = { newpost: {} }, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { loading: true, newpost: {} };
    case CREATE_POST_SUCCESS:
      return { loading: false, newpost: action.payload };
    case CREATE_POST_FAIL:
      return { loading: false, newpost: {} };
    case CREATE_POST_RESET:
      return { loading: false, newpost: {} };
    default:
      return state;
  }
};
