import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header header-hide">
      <div className="container">

        <div id="logo" className="pull-left">
          <h1><Link to="/" className="scrollto"><span>Kids</span>Share A Book</Link></h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {/* <Link to="/catalog">Catalog</Link> */}
            <li className="menu-active"><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/bookshelf">Bookshelf</Link></li>
            <li><Link to="/my-books">My books</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li className="menu-has-children"><Link to="/#">Drop Down</Link>
              <ul>
                <li><Link to="/#">Drop Down 1</Link></li>
                <li><Link to="/#">Drop Down 2</Link></li>
                <li><Link to="/#">Drop Down 3</Link></li>
                <li><Link to="/#">Drop Down 4</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}