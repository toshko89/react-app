export default function Header() {
    return (
        <header id="header" className="header header-hide">
        <div className="container">
    
          <div id="logo" className="pull-left">
            <h1><a href="/#body" className="scrollto"><span>Kids</span>Share A Book</a></h1>
          </div>
    
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/#home">Home</a></li>
              <li><a href="/#about-us">About</a></li>
              <li><a href="/#bookshelf">Bookshelf</a></li>
              <li><a href="/#my-books">My books</a></li>
              <li><a href="/#register">Register</a></li>
              <li><a href="/#login">Login</a></li>
              <li><a href="/#logout">Logout</a></li>
              <li className="menu-has-children"><a href="/#">Drop Down</a>
                <ul>
                  <li><a href="/#">Drop Down 1</a></li>
                  <li><a href="/#">Drop Down 3</a></li>
                  <li><a href="/#">Drop Down 4</a></li>
                  <li><a href="/#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
}