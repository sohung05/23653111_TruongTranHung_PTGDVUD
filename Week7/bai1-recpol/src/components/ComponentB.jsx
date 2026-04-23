import React, { useContext } from "react";
import { CounterContext } from "../recoils/CounterContext";

const ComponentB = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  );
};

export default ComponentB;