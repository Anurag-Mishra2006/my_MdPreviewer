import './App.css'
import { useState } from "react";
import { ThemeContext } from "./context/theme";


import FrontPage from './pages/FrontPage';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* THIS div controls dark mode for whole app */}
        {/* <div className={theme === "dark" ? "dark" : ""}> */}
        <div className={theme === "dark" ? "dark" : ""}>
          <FrontPage />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
