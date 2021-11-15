import { Link } from "react-router-dom";

//TODO finish the redirect!!!
//TODO ERROR page kato Home page-a

export default function Header() {
  return (
    <header id="header" className="header header-hide">
      <div className="container">

        <div id="logo" className="pull-left">
          <h1><Link to="/" className="scrollto"><span>Kids</span>Share A Book</Link></h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active"><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/bookshelf">Bookshelf</Link></li>
            <li><Link to="/my-books">My books</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}