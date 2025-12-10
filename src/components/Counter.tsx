import { useState, useEffect } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setIsChanging(true);
  };

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  return (
    <div className="counter">
      <h1>Счётчик</h1>
      <div
        className={`counter__value ${
          isChanging ? "counter__value--changing" : ""
        }`}
      >
        {count}
      </div>
      <button className="counter__button" onClick={handleIncrement}>
        Нажми меня
      </button>
      <div className="counter__info">Нажатий: {count}</div>
    </div>
  );
};
