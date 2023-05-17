import React from "react";
import styles from "./Count.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  countMinesAction,
  countPlusAction,
} from "../../redux/actions/countAction";

export function Count() {
  const number = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const handelMinesClick = () => dispatch(countMinesAction());
  const handelPlusClick = () => dispatch(countPlusAction());

  console.log(`number`, number);
  return (
    <div className={styles.counter}>
      <input className={styles.input} type="text" />
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
