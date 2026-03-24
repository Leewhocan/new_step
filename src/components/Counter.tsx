import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Счётчик</h1>
      <div>{count}</div>
      <button className={styles.btn} onClick={handleIncrement}>
        Нажми меня
      </button>
    </div>
  );
};
