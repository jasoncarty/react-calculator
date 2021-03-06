const convertIntoOperator = {
  "+": (x, y) => x + y,
  "*": (x, y) => x * y,
};

/**
 * @param  {} {fieldValues
 * @param  {} calculationType}
 * @returns {Object}
 */
export const calculate = ({ fieldValues, calculationType }) => {
  /*
    Deal with the values input into the fields depending on
    what kind of calculation type
  */
  if (Object.entries(fieldValues).length > 1 && calculationType) {
    let initialValue = 0;

    if (calculationType === "*") {
      initialValue = 1;
    }

    return {
      answer: Object.keys(fieldValues).reduce((acc, key) => {
        if (fieldValues[key] === "") {
          return Number(acc);
        }
        return convertIntoOperator[calculationType](acc, Number(fieldValues[key]));
      }, initialValue)
    };
  }

  return { answer: 0 };
};

/**
 * @param  {} val
 * @returns {String}
 */
export const validator = (val) => {
  // Replace everything that is not a number
  let value = val.replace(/\D+/g, "");

  // Ensure that we dont get numbers that start with 0
  const splitVal = value.split("");
  if (splitVal.length && splitVal[0] === "0" && splitVal[1]) {
    value = splitVal[1];
  }
  return value;
};
