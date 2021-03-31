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
  GETPROFILE_INFO_RESET,
  CONTACT_SEND_REQUEST,
  CONTACT_SEND_SUCCESS,
  CONTACT_SEND_FAIL,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('expires');
      return { userInfo: null };
    default:
      return state;
  }
};

export const getprofileInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GETPROFILE_INFO_REQUEST:
      return { loading: true };
    case GETPROFILE_INFO_SUCCESS:
      return { loading: false, user: action.payload };
    case GETPROFILE_INFO_FAIL:
      return { loading: false };
    case GETPROFILE_INFO_RESET:
      return { loading: false };
    default:
      return state;
  }
};

export const sendEmaildReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_SEND_REQUEST:
      return { loading: true };
    case CONTACT_SEND_SUCCESS:
      return { loading: false, message: action.payload };
    case CONTACT_SEND_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
