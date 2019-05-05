import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import cs from "classnames";

import { changeFieldValue } from "./actions";
import { validator } from "../utils";
import styles from "./InputBlock.module.css";

export class InputBlock extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    changeValue: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  state = {
    value: ""
  }


  /**
   * @param  {} e
   */
  handleChange = (e) => {
    if (typeof e.target.value === "string") {
      const value = validator(e.target.value);
      this.setState({ value });
      this.props.changeValue({
        index: this.props.index,
        payload: value
      });
    }
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;

    return (
      <div className={cs(styles.inputBlock, className)}>
        <div className={styles.content}>
          <div className={styles.text}>
            {`Value ${this.props.index + 1}: `}
          </div>
          <input
            type="text"
            className={styles.input}
            onChange={this.handleChange}
            value={value}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeValue: payload => dispatch(
    changeFieldValue(payload)
  )
});

export default connect(
  null,
  mapDispatchToProps
)(InputBlock);
