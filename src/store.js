import { createStore, combineReducers } from "redux";
// import reducers here
import helloReducer from "./components/HelloWorld/reducer";

const store = createStore(
  combineReducers({
    helloReducer: helloReducer
  }),
  {}
);
export default store;
