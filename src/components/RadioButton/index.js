import React from "react";
import PropTypes from "prop-types";

import styles from "./RadioButton.module.css";

const RadioButton = ({ text, onChange, value, ...rest }) => (
  <div className={styles.radioButton}>
    <input
      type="radio"
      name="calculationType"
      value={value}
      onChange={onChange}
      {...rest}
    />
    <div className={styles.text}>{text}</div>
  </div>
);

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
