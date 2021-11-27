import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../services/authService.js";

export default function Login() {

  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(user.email, user.password);
      setUser({ email: '', password: '' });
      setError(null);
      sessionStorage.setItem('user', userData.uid);
      navigate('/bookshelf');
    } catch (error) {
      setUser({ email: '', password: '' });
      setError(error.message);
    }
  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Sign in</h2>
        </div>
      </div>
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm" onSubmit={signIn}>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    onBlur={() => setError(null)}
                  />
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="subject" id="subject" placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    onBlur={() => setError(null)}
                  />
                </div>
                <div className="text-center"><button className="btn btn-primary" type="submit">Sign in</button></div>
                <p></p>
              </form>
              <p>Don't have an account yet?  <Link to="/register">Sign Up</Link> </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}