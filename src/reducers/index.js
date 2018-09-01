import { combineReducers } from "redux";

import TopNewsReducer from "./TopNewsReducer";
import MovieReviewsReducer from "./MovieReviewsReducer";
import SearchReducer from "./SearchReducer";

export default combineReducers({
  topNewsArticles: TopNewsReducer,
  movieReviews: MovieReviewsReducer,
  searchResults: SearchReducer
});
