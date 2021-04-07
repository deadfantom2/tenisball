import Axios from 'axios';
import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_RESET,
  SUCCESS_MESSAGE,
  SUCCESS_MESSAGE_RESET,
} from './constants/messageConstants';

export const interceptor = (store) => {
  // const {
  //   userLogin: { userInfo },
  // } = store.getState();
  Axios.interceptors.request.use(
    (conf) => {
      // conf.headers['Auth'] = 'some token'
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  Axios.interceptors.response.use(
    (next) => {
      if (next.headers['accept-ranges'] !== 'bytes') {
        store.dispatch({ type: SUCCESS_MESSAGE_RESET });
        store.dispatch({ type: ERROR_MESSAGE_RESET });
        store.dispatch({ type: SUCCESS_MESSAGE, payload: next.data.message });
      }
      return Promise.resolve(next);
    },
    (error) => {
      // You can handle error here and trigger warning message without get in the code inside
      const { status } = error.response;
      store.dispatch({
        type: ERROR_MESSAGE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      if (status === 401) {
        const types = [
          { type: 'USER_LOGOUT' },
          { type: 'POST_ONE_RESET' },
          { type: 'ADD_LIKE_RESET' },
          { type: 'CREATE_POST_RESET' },
          { type: 'EDIT_POST_RESET' },
          { type: 'PROFILE_INFO_RESET' },
        ];
        types.map((property) =>
          store.dispatch({
            type: property.type,
          })
        );
      }

      return Promise.reject(error);
    }
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  interceptor,
};
