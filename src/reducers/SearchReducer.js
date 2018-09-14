import { FETCH_SEARCH_RESULTS, SEARCH_STARTED } from "../actions/types";

const INITIAL_STATE = {
  isSearching: false,
  docs: [],
  meta: {
    hits: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return {
        isSearching: false,
        ...action.payload
      };

    case SEARCH_STARTED:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
