import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

export const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
