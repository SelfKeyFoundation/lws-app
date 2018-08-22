import { createStore, applyMiddleware, combineReducers } from "redux";
import * as errorReducer from "./error"; // import all reducers from ducks/index.js

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({errorReducer});
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
  );
}