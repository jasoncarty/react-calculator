import { CHANGE } from "../../constants";

/**
 * @param  {} {index
 * @param  {} payload}
 * @returns {Object}
 */
export const changeFieldValue = ({index, payload}) => ({
  type: CHANGE,
  index,
  payload
});
