import { combineReducers } from "redux";

import TopNewsReducer from "./TopNewsReducer";

export default combineReducers({
  topNewsArticles: TopNewsReducer
});
