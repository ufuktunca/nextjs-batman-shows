import { combineReducers } from "redux";
import showsReducer from "./showsReducer";
import showDetailReducer from "./showDetailReducer";

export default combineReducers({
  shows: showsReducer,
  showDetail: showDetailReducer,
});
