import axios from 'axios';
import { auth } from '../firebase';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GETPROFILE_INFO_REQUEST,
  GETPROFILE_INFO_SUCCESS,
  GETPROFILE_INFO_FAIL,
  // GETPROFILE_INFO_RESET,
  PROFILE_INFO_REQUEST,
  PROFILE_INFO_SUCCESS,
  // PROFILE_INFO_FAIL,
  PROFILE_PASSWORD_REQUEST,
  PROFILE_PASSWORD_SUCCESS,
  PROFILE_PASSWORD_FAIL,
  PROFILE_DELETE_REQUEST,
  PROFILE_DELETE_SUCCESS,
  PROFILE_DELETE_FAIL,
  CONTACT_SEND_REQUEST,
  CONTACT_SEND_SUCCESS,
  CONTACT_SEND_FAIL,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAIL,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_FAIL,
} from '../constants/userConstants';

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

export const register = (args) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const configFirebase = {
    url: 'http://localhost:3000/register/complete',
    handleCodeInApp: true,
  };

  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data, status } = await axios.post(
      `/api/auth/register`,
      args,
      config
    );

    if (status === 201) {
      await auth.sendSignInLinkToEmail(args.email, configFirebase);
    }
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL });
  }
};

export const login = (args) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(`/api/auth/login`, args, config);
    console.log('data: ', data);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    const { token, user, expiresIn } = data;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(user));
    localStorage.setItem('expires', expiresIn);
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('expires');
  dispatch({ type: USER_LOGOUT });
};

export const getProfileInfo = () => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: GETPROFILE_INFO_REQUEST });
    const { data } = await axios.get(`/api/user/profile-info`, config);
    dispatch({ type: GETPROFILE_INFO_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: GETPROFILE_INFO_FAIL });
  }
};

export const changeProfileInfo = (property) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const {
    profileInfo: { user },
  } = getState();

  try {
    dispatch({ type: PROFILE_INFO_REQUEST });

    await axios.put(`/api/user/edit-profile`, property, config);

    let { name, surname, age } = user;
    name = property.name;
    surname = property.surname;
    age = property.age;

    dispatch({
      type: PROFILE_INFO_SUCCESS,
      payload: {
        ...user,
        name,
        surname,
        age,
      },
    });
  } catch (error) {
    dispatch({ type: PROFILE_PASSWORD_FAIL });
  }
};

export const profilePassword = (property) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: PROFILE_PASSWORD_REQUEST });

    const { data } = await axios.put(
      `/api/user/edit-password`,
      property,
      config
    );

    dispatch({ type: PROFILE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROFILE_PASSWORD_FAIL });
  }
};

export const profileDelete = () => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: PROFILE_DELETE_REQUEST });
    const { data } = await axios.delete(`/api/user/delete-profile`, config);
    dispatch({ type: PROFILE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROFILE_DELETE_FAIL });
  }
};

export const sendEmailContact = (property) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_SEND_REQUEST });
    const { data } = await axios.post(`/send-about-coin`, property);
    dispatch({ type: CONTACT_SEND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_SEND_FAIL });
  }
};

export const addInFavoritePost = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);

  try {
    dispatch({ type: ADD_FAVORITE_REQUEST });
    const { data } = await axios.post(`/api/user/add-favorite`, body, config);
    dispatch({ type: ADD_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_FAVORITE_FAIL });
  }
};

export const deleteInFavoritePost = (body) => async (dispatch, getState) => {
  const config = getAuthInfo(getState);
  const {
    profileInfo: { user },
  } = getState();

  try {
    dispatch({ type: DELETE_FAVORITE_REQUEST });
    const { data, status } = await axios.put(
      `/api/user/delete-favorite`,
      body,
      config
    );

    dispatch({ type: DELETE_FAVORITE_SUCCESS, payload: data });

    const newFavorites = user.favorites.filter(
      (item) => item['_id'] !== body.favoriteId
    );

    if (status === 200) {
      dispatch({
        type: GETPROFILE_INFO_SUCCESS,
        payload: { ...user, favorites: newFavorites },
      });
    }
  } catch (error) {
    dispatch({ type: DELETE_FAVORITE_FAIL });
  }
};
