import { FETCH_TOP_NEWS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_NEWS:
      return action.payload;

    default:
      return state;
  }
};
