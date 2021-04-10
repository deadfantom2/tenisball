import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  userRegisterReducer,
  userLoginReducer,
  getprofileInfoReducer,
} from './reducers/userReducers';
import {
  successMsgReducer,
  errorMsgReducer,
} from './reducers/messagesReducers';
import {
  postListReducer,
  postOneReducer,
  addPostReducer,
} from './reducers/postReducers';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  profileInfo: getprofileInfoReducer,
  postList: postListReducer,
  postOne: postOneReducer,
  addPost: addPostReducer,
  successMsg: successMsgReducer,
  errorMsg: errorMsgReducer,
});

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('userInfo'));
const expires = localStorage.getItem('expires');

const userInfoFromStorage =
  token && user && expires
    ? {
        token: token,
        user: user,
        expiresIn: expires,
      }
    : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
