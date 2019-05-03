import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import styles from "./AnswerBlock.module.css";
import RadioButton from "../RadioButton";
import { changeCalculationType } from './actions';
import { calculate } from "../utils";

export class AnswerBlock extends Component {
  static propTypes = {
    fieldValues: PropTypes.PropTypes.shape().isRequired,
    updateCalculationType: PropTypes.func.isRequired,
    calculationType: PropTypes.string.isRequired
  }

  state = {
    answer: 0
  }

  static getDerivedStateFromProps(nextProps) {
    return calculate(nextProps);
  }

  handleRadioChange = (e) => {
    if (e.target.value) {
      this.props.updateCalculationType(e.target.value);
    }
  }

  render() {
    const { calculationType } = this.props;
    return (
      <div className={styles.answerBlock}>
        <div className={styles.content}>
          <div className={styles.radioList}>
            <RadioButton
              text="Add"
              value="SUM"
              onChange={this.handleRadioChange}
              checked={calculationType === '+'}
            />
            <RadioButton
              text="Multiply"
              value="MULTIPLY"
              onChange={this.handleRadioChange}
              checked={calculationType === '*'}
            />
          </div>
          <div className={styles.answer}>
            Answer: {this.state.answer}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fieldValues: state.fieldValues,
  calculationType: state.calculationType
})

const mapDispatchToProps = (dispatch) => ({
  updateCalculationType: (payload) => dispatch(changeCalculationType(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerBlock);
