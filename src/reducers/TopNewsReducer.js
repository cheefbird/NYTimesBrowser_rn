import { FETCH_TOP_NEWS, SET_NEWS_CATEGORY } from "../actions/types";

const INITIAL_STATE = {
  articles: [],
  selectedCategory: "home"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_NEWS:
      return { ...state, articles: action.payload };

    case SET_NEWS_CATEGORY:
      return { ...state, selectedCategory: action.payload };

    default:
      return state;
  }
};
