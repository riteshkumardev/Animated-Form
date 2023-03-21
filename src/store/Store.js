import { legacy_createStore as createStore } from "redux";
import { ReduxReducer } from "./reducer";

export const ReduxStore = createStore(
  ReduxReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
