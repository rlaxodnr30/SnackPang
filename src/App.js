import "./App.css";
import Router from "./Routers/Router";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;
