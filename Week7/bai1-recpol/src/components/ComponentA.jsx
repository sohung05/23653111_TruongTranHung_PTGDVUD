import React, { useContext } from "react";
import { CounterContext } from "../recoils/CounterContext";

const ComponentA = () => {
  const { count } = useContext(CounterContext);

  return <h2>Count: {count}</h2>;
};

export default ComponentA;