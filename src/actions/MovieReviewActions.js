import { FETCH_MOVIE_REVIEWS } from "./types";
import { API_KEY } from "../../config/API";

const path = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${API_KEY}`;

export const fetchMovieReviews = () => {
  return dispatch => {
    fetch(path)
      .then(response => response.json())
      .then(json => {
        const { results } = json;

        dispatch({
          type: FETCH_MOVIE_REVIEWS,
          payload: results
        });
      });
  };
};
