import React from "react";
import { Provider } from "react-redux";

import { Store } from "./Store";
import AppNavigator from "./Routes";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}
