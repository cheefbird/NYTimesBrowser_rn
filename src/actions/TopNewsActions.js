import { FETCH_TOP_NEWS } from "./types";
import { API_KEY } from "../../config/API";

const path = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

export const fetchTopNews = () => {
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
