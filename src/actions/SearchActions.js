import { FETCH_SEARCH_RESULTS, SEARCH_STARTED } from "./types";
import { API_KEY } from "../config/API";

const path = searchText =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${searchText}`;

export const searchArticles = searchText => {
  const requestUrl = path(searchText);

  return dispatch => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        const { response } = json;

        dispatch({
          type: FETCH_SEARCH_RESULTS,
          payload: response
        });
      });
  };
};

export function searchStarted() {
  return {
    type: SEARCH_STARTED,
    payload: { isSearching: true }
  };
}
