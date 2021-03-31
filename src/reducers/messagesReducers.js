import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_RESET,
  SUCCESS_MESSAGE,
  SUCCESS_MESSAGE_RESET,
} from '../constants/messageConstants';

export const errorMsgReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { error: action.payload };
    case ERROR_MESSAGE_RESET:
      return {};
    default:
      return state;
  }
};

export const successMsgReducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return { message: action.payload };
    case SUCCESS_MESSAGE_RESET:
      return {};
    default:
      return state;
  }
};
