import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <a href="#about">About</a>
      <Link to="/contact">Contact</Link>
      <button
        onClick={toggleTheme}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          cursor: "pointer"
        }}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;