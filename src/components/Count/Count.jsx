import React, { useState } from "react";
import styles from "./Count.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  countMinesAction,
  countPlusAction,
} from "../../redux/actions/countAction";

export function Count() {
  const number = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handelMinesClick = () => dispatch(countMinesAction(input));
  const handelPlusClick = () => dispatch(countPlusAction(input));

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  console.log(`number`, input);
  return (
    <div className={styles.counter}>
      <input onChange={onInputChange} className={styles.input} type="number" />
      <div>
        <button onClick={handelMinesClick} className={styles.mines}>
          -
        </button>
        <span className={styles.number}>{number}</span>
        <button onClick={handelPlusClick} className={styles.plus}>
          +
        </button>
      </div>
    </div>
  );
}
