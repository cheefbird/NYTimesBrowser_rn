import { FETCH_SEARCH_RESULTS } from "../actions/types";

const INITIAL_STATE = {
  docs: [],
  meta: {
    hits: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
