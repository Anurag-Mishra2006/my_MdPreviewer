import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

function HandleReset() {
  localStorage.setItem("markdown", "");
}

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b
                   bg-gray-900 text-gray-100
                   dark:bg-gray-800 dark:text-gray-100
                   transition-colors">

      {/* Logo / Home */}
      <h1 className="text-xl font-bold">
        <Link
          to="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          My_MdPreviewer
        </Link>
      </h1>

      {/* Actions */}
      <nav className="flex items-center gap-3">
        {/* Reset Button */}
        <button
          onClick={HandleReset}
          className="px-3 py-1.5 text-sm font-medium rounded-md
                     bg-red-500 text-white hover:bg-red-600
                     dark:bg-red-600 dark:hover:bg-red-700
                     transition"
        >
          Reset
        </button>

        {/* Copy Button */}
        <button
          className="px-3 py-1.5 text-sm font-medium rounded-md
                     bg-gray-200 text-gray-800 hover:bg-gray-300
                     dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
                     transition"
        >
          Copy
        </button>

        {/* Theme Toggle */}
        <ThemeBtn />
      </nav>
    </header>
  );
}

export default Header;
