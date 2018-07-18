import { combineReducers } from "redux";

import TopNewsReducer from "./TopNewsReducer";
import MovieReviewsReducer from "./MovieReviewsReducer";

export default combineReducers({
  topNewsArticles: TopNewsReducer,
  movieReviews: MovieReviewsReducer
});
