import { FETCH_SHOWS } from "../actions/type";

const showsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SHOWS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default showsReducer;
