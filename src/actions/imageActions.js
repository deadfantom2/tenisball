import {
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
} from '../constants/imageConstants';
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

export const deleteImage = (property) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const { idPhoto } = property;
  const {
    postOne: { post },
  } = getState();

  try {
    dispatch({ type: DELETE_IMAGE_REQUEST });
    const { data } = await axios.put('/api/img/delete-img', property, config);
    dispatch({ type: DELETE_IMAGE_SUCCESS, payload: data.message });

    const newPhotos = post.photos.filter((item) => {
      return item.photo._id !== idPhoto;
    });
    dispatch({
      type: 'POST_ONE_SUCCESS',
      payload: { ...post, photos: newPhotos },
    });

    // const deletePhoto = post.photos.splice(indexPhoto, 1);
  } catch (error) {
    dispatch({
      type: DELETE_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
