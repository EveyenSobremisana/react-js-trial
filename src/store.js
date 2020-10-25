import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevtools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevtools(applyMiddleware(...middleware))
);

export default store;
