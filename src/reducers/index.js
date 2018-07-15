import { combineReducers } from "redux";

import TopNewsReducer from "./TopNewsReducer";

export default combineReducers({
  topNews: TopNewsReducer
});
