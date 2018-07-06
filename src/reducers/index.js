import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import AppNavigator from "../Routes";

import TopNewsReducer from "./TopNewsReducer";

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: navReducer,
  topNewsArticles: TopNewsReducer
});
