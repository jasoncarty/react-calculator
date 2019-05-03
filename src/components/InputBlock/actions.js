import { CHANGE } from "../../constants";

export const changeFieldValue = ({index, payload}) => {
  return {
    type: CHANGE,
    index,
    payload
  };
};
