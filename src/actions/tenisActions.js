import axios from 'axios';
import {
  TENIS_LIST_REQUEST,
  TENIS_LIST_SUCCESS,
  TENIS_LIST_FAIL,
  TENIS_LIST_RESET,
} from '../constants/tenisConstants';

export const getTenisesList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TENIS_LIST_REQUEST });

    const {
      data: { players },
    } = await axios.get(
      'https://data.latelier.co/training/tennis_stats/headtohead.json'
    );

    dispatch({ type: TENIS_LIST_SUCCESS, payload: sortPlayers(players) });
  } catch (error) {
    dispatch({
      type: TENIS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sortPlayers = (
  players,
  attribute = 'data',
  sortDirection = -1
) => {
  return players.sort((a, b) => {
    if (a[`${attribute}`].points < b[`${attribute}`].points) {
      return -1 * sortDirection;
    } else if (a[`${attribute}`].points > b[`${attribute}`].points) {
      return 1 * sortDirection;
    } else {
      return 0;
    }
  });
};
