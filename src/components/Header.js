import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import UserContext from "../context/userContext.js";
// import NavLoggedIn from "./NavLoggedIn.js";
// import NavPublic from "./NavPublic.js";

export default function Header() {

  const { isLogedIn, userEmail } = useContext(UserContext);

  useEffect(() => {
    if (!isLogedIn) {
      return;
    }
  }, [isLogedIn])

  return (
    <>
      {isLogedIn
        ?
        (<header id="header" className="header header-hide">
          <div className="container">
            <div id="logo" className="pull-left">
              <h1><Link to="/" className="scrollto"><span>Kids</span>Share A Book</Link></h1>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><NavLink to="/my-books">Welcome, {userEmail}!</NavLink></li>
                <li className="menu-active"><Link to="/">Home</Link></li>
                <li><NavLink to="/about-us">About</NavLink></li>
                <li><NavLink to="/bookshelf">Bookshelf</NavLink></li>
                <li><NavLink to="/my-books">My books</NavLink></li>
                <li><NavLink to="/add-book">Add Book</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>)
        :
        (<header id="header" className="header header-hide">
          <div className="container">
            <div id="logo" className="pull-left">
              <h1><Link to="/" className="scrollto"><span>Kids</span>Share A Book</Link></h1>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><NavLink to="/login">Welcome, Guest!</NavLink></li>
                <li className="menu-active"><Link to="/">Home</Link></li>
                <li><NavLink to="/about-us">About</NavLink></li>
                <li><NavLink to="/bookshelf">Bookshelf</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>)
      }
    </>
  );
}