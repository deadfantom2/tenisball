import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  ADD_LIKE_REQUEST,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAIL,
  POST_ONE_REQUEST,
  POST_ONE_SUCCESS,
  POST_ONE_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_LIKE_COMMENT_REQUEST,
  ADD_LIKE_COMMENT_SUCCESS,
  ADD_LIKE_COMMENT_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAIL,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_FAIL,
  REPORT_COMMENT_REQUEST,
  REPORT_COMMENT_SUCCESS,
  REPORT_COMMENT_FAIL,
} from '../constants/postConstants';
import axios from 'axios';

export const getAuthInfo = (getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  return setHeaderToken(userInfo);
};

export const setHeaderToken = (userInfo) => {
  let userToken;
  if (userInfo !== null) {
    userToken = userInfo.token;
  } else {
    userToken = userInfo;
  }
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  };
};

/**************************************************************************************************** */
export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get('/api/post/');
    dispatch({ type: POST_LIST_SUCCESS, payload: data.posts });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const onePost = (id) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: POST_ONE_REQUEST });
    const { data } = await axios.get('/api/post/' + id, config);
    dispatch({ type: POST_ONE_SUCCESS, payload: data.post });
  } catch (error) {
    dispatch({ type: POST_ONE_FAIL });
  }
};

export const createPost = (args) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: CREATE_POST_REQUEST });
    const { data } = await axios.post('/api/post/add-post', args, config);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_POST_FAIL });
  }
};

export const editPost = (id, property) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const {
    postOne: { post },
  } = getState();

  try {
    dispatch({ type: EDIT_POST_REQUEST });

    const { data } = await axios.put(
      '/api/post/edit-post/' + id,
      property,
      config
    );

    dispatch({ type: EDIT_POST_SUCCESS, payload: data.message });

    let { title, certificate, description, bitkin, petrov, link_video } = post;
    title = property.title;
    certificate = property.certificate;
    description = property.description;
    bitkin = property.bitkin;
    petrov = property.petrov;
    link_video = property.link_video;

    dispatch({
      type: POST_ONE_SUCCESS,
      payload: {
        ...post,
        title,
        certificate,
        description,
        bitkin,
        petrov,
        link_video,
      },
    });
  } catch (error) {
    dispatch({ type: EDIT_POST_FAIL });
  }
};

export const addLikePost = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: ADD_LIKE_REQUEST });
    const { data } = await axios.post('/api/post/like-post', body, config);
    dispatch({ type: ADD_LIKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_LIKE_FAIL });
  }
};

export const addLikeComment = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: ADD_LIKE_COMMENT_REQUEST });
    const { data } = await axios.post('/api/post/like-comment', body, config);
    dispatch({ type: ADD_LIKE_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_LIKE_COMMENT_FAIL });
  }
};

export const addCommentPost = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const {
    postOne: { post },
  } = getState();

  try {
    dispatch({ type: ADD_COMMENT_REQUEST });
    const { data } = await axios.post('/api/post/add-comment', body, config);
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: data });
    const newComment = post.comments.unshift({
      comment: data.comment,
    });
    dispatch({ type: POST_ONE_SUCCESS, payload: { ...post, newComment } });
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL });
  }
};

export const deleteCommentPost = (id) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const {
    postOne: { post },
  } = getState();

  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await axios.delete(
      '/api/post/comment/delete/' + id,
      config
    );
    dispatch({ type: DELETE_POST_SUCCESS, payload: data });
    const newComments = post.comments.filter(
      (item) => item['comment']['_id'] !== id
    );
    dispatch({
      type: POST_ONE_SUCCESS,
      payload: { ...post, comments: newComments },
    });
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL });
  }
};

export const editComment = (id, body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: EDIT_COMMENT_REQUEST });
    const { data } = await axios.put(
      '/api/post/edit-comment/' + id,
      body,
      config
    );
    // console.log(data);
    // dispatch({ type: EDIT_COMMENT_SUCCESS, payload: data });
    dispatch({ type: POST_ONE_SUCCESS });
  } catch (error) {
    dispatch({ type: EDIT_COMMENT_FAIL });
  }
};

export const reportSomeComment = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: REPORT_COMMENT_REQUEST });
    const { data } = await axios.post(`/api/post/report-comment`, body, config);
    dispatch({ type: REPORT_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REPORT_COMMENT_FAIL });
  }
};
