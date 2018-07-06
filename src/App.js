import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import AppNavigator from "./Routes";

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const AppRoot = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppRoot);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk, reactNavigationMiddleware))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
