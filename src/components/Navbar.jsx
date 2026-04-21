import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useAuth, useUsername } from "./AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const username = useUsername();
  const { logout } = useAuth();

  return (
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/posts">Blog</Link>
      <Link to="/contact">Contact</Link>

      {/* <Link to="/login">Login</Link> */}
      {username ? <p onClick={logout}> hi {username},  logout</p> : <Link to="/login">Login</Link> }
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