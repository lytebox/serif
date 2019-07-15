import { createStore, combineReducers } from "redux";
// import reducers here
import lyricReducer from "./reducers/lyricReducer";

const store = createStore(
  combineReducers({
    lyric: lyricReducer
  }),
  {}
);
export default store;
