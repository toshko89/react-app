import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-4">
            <div className="footer-logo">

              <a className="navbar-brand" href="/#">Kids Books</a>
              <p>We can help our children find the tools they need to succeed in life. Having access to information through the printed word is an absolute necessity. Knowledge is power, and books are full of it. But reading is more than just a practical tool.With your help, your children can begin a lifelong relationship with the printed word, so they grow into adults who read easily and frequently whether for business, knowledge, or pleasure.
              </p>

            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">

              <h4>About Us</h4>

              <ul className="list-unstyled">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/about-me">About me :)</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div className="copyrights">
        <div className="container">
          <p>&copy; Copyrights eStartup. All rights reserved.</p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>

    </footer>
  );
}