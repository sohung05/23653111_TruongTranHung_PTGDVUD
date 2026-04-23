import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeComponent";

function App() {
  return (
    <ThemeProvider>
      <h1>Hello Theme</h1>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;