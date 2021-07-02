import { FETCH_SHOWS } from "./type";

export const fetchBatmanShows = (shows) => async (dispatch) => {
  dispatch({
    type: FETCH_SHOWS,
    payload: shows,
  });
};
