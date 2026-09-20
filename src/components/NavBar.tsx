import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Countries
        </Link>

        <div className="ms-auto d-flex align-items-center gap-2">
          <Link className="btn btn-outline-secondary" to="/">
            Home
          </Link>
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

// function Navbar() {
//   return (
//     <button className="btn btn-primary">
//       TEST BUTTON
//     </button>
//   );
// }

// function Navbar() {
//   return (
//     <h1>
//       NAVBAR IS WORKING
//     </h1>
//   );
// }

export default Navbar;

