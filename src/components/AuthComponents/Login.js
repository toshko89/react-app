import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../services/authService.js";

export default function Login() {

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const userData = await login(email, password);
      sessionStorage.setItem('user', userData.uid);
      navigate('/bookshelf');
    } catch (error) {
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
                    onBlur={() => setError(null)}
                  />
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="password" id="subject" placeholder="Password"
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