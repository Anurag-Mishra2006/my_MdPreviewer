import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function ThemeBtn() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1.5 text-sm font-medium rounded-md
                 bg-gray-200 text-gray-800 hover:bg-gray-300
                 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
                 transition"
                 
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeBtn;
