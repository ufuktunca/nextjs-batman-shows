import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const createReduxStore = (data) => {
  const store = createStore(
    reducers,
    data,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
  );

  return store;
};

export default createReduxStore;
