import { createStore } from "redux";
import { combineReducers } from "redux";
import { SUM, MULTIPLY, CHANGE } from "./constants";

/**
 * @param  {} state="+"
 * @param  {} action
 * @returns {String}
 */
export const calculationType = (state = "+", action) => {
  switch (action.type) {
    case SUM:
      return "+";
    case MULTIPLY:
      return "*";
    default:
      return state;
  }
};

/**
 * @param  {} state={}
 * @param  {} action
 * @returns {Object}
 */
export const fieldValues = (state = {}, action) => {
  switch (action.type) {
    case CHANGE: {
      const { index, payload } = action;
      // eslint-disable-next-line no-unused-vars
      const { [index]: value, ...rest } = state;
      if (payload === "") {
        return rest;
      }
      return {
        ...state,
        [index]: Number(payload),
      };
    }
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({
    calculationType,
    fieldValues
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
