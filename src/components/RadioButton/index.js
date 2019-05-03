import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RadioButton = ({ text, onChange, value, ...rest }) => (
  <Fragment>
    <input
      type="radio"
      name="calculationType"
      value={value}
      onChange={onChange}
      {...rest}
    />
    {text}
  </Fragment>
);

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
