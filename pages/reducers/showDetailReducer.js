import { SET_BATMAN_SHOW_DETAIL } from "../actions/type";

const showDetailReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BATMAN_SHOW_DETAIL:
      return (state = action.payload);
    default:
      return state;
  }
};

export default showDetailReducer;
