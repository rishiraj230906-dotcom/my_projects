import './header.css';
import { Link } from 'react-router-dom';

function Header({ activeLink, setActiveLink, isAuth, onLogout, Username }) {
  const handleLogout = () => {
    onLogout();
    setActiveLink("Home");
  }
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fw-bold" to="/"><i className="fa-solid fa-gamepad"></i> Gamers
                spot</Link>
              <li className="nav-item">
                <Link to="/" className={`nav-link ${activeLink === "Home" ? "active" : ""}`} onClick={() => setActiveLink("Home")}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/all_games" className={`nav-link ${activeLink === "All_Games" ? "active" : ""}`} onClick={() => setActiveLink("All_Games")}>All Games</Link>
              </li>
              <li className="nav-item">
                <Link to="/emulators" className={`nav-link ${activeLink === "Emulators" ? "active" : ""}`} onClick={() => setActiveLink("Emulators")}>Emulators</Link>
              </li>
             
              {isAuth ? (
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${activeLink === "User" ? "active" : ""}`}
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {Username}<i className="fa-solid fa-user"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/login" onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                  </ul>
                </li>
              )}
            </ul>
            {/* <!-- Search bar --> */}
            <form className="d-flex" role="search">
              <input className="form-control me-2 game_search_bar" type="search" placeholder="Search game" />
              <button className="btn btn-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header;