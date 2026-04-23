import React from "react";
import { CounterProvider } from "./recoils/CounterContext";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  return (
    <CounterProvider>
      <ComponentA />
      <ComponentB />
    </CounterProvider>
  );
}

export default App;