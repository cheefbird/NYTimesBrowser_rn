import { FETCH_TOP_NEWS } from "./types";
import { API_KEY } from "../../config/API";

const path = categoryName =>
  `https://api.nytimes.com/svc/topstories/v2/${categoryName}.json?api-key=${API_KEY}`;

export const fetchTopNews = (categoryName = "home") => {
  const requestUrl = path(categoryName);

  return dispatch => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        const { results } = json;

        dispatch({
          type: FETCH_TOP_NEWS,
          payload: results
        });
      });
  };
};
