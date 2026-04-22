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

      {username ? (
        <button className="nav-btn" onClick={logout}>
          Hey {username}, Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
      )}

      <button className="nav-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙  Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;