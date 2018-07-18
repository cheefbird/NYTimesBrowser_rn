import { FETCH_MOVIE_REVIEWS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REVIEWS:
      return action.payload;

    default:
      return state;
  }
};
