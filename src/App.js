import React from "react";
import cs from "classnames";

import InputBlock from "./components/InputBlock";
import AnswerBlock from "./components/AnswerBlock";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={cs(styles.row)}>
        <InputBlock index={0} className={styles.block}></InputBlock>
        <InputBlock index={1} className={styles.block}></InputBlock>
        <InputBlock index={2} className={styles.block}></InputBlock>
      </div>
      <div className={cs(styles.row)}>
        <AnswerBlock className={styles.block}/>
      </div>
    </div>
  );
};

export default App;
