import { FETCH_TOP_NEWS, SET_NEWS_CATEGORY } from "./types";
import { API_KEY } from "../../config/API";

const requestUrl = categoryName =>
  `https://api.nytimes.com/svc/topstories/v2/${categoryName}.json?api-key=${API_KEY}`;

export const fetchTopNews = categoryName => {
  const path = requestUrl(categoryName);

  return dispatch => {
    fetch(path)
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

export const setNewsCategory = selectedCategory => {
  return {
    type: SET_NEWS_CATEGORY,
    payload: selectedCategory
  };
};
