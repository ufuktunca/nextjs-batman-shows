import { SET_BATMAN_SHOW_DETAIL } from "./type";
import { getBatmanShow } from "../api/api";

export const setBatmanShowDetail = (id) => async (dispatch) => {
  const response = await getBatmanShow(id);

  dispatch({
    type: SET_BATMAN_SHOW_DETAIL,
    payload: response,
  });
};
