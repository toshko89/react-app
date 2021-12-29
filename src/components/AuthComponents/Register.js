import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../services/authService.js";


export default function Register() {
  
  const regExForEmail = /^[^\s()<>@,;:/]+@\w[\w.-]+\.[a-z]{2,}$/i;
  const [user, setUser] = useState({ email: '', password: '', rePass: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (!regExForEmail.test(user.email)) {
      setError('Please enter a valid email');
      setUser({ email: '', password: '', rePass: '' });
      return;
    } else if (user.password.length < 6) {
      setError('Please enter at least 6 chars for password');
      setUser({ ...user, password: '', rePass: '' });
      return;
    } else if (user.password !== user.rePass) {
      setError('Password doesn\'t match');
      setUser({ ...user, password: '', rePass: '' });
      return;
    }

    try {
      const userData = await registerUser(user.email, user.password);
      setUser({ email: '', password: '', rePass: '' });
      sessionStorage.setItem('user', userData.uid);
      navigate('/bookshelf');
    } catch (error) {
      setUser({ email: '', password: '', rePass: '' });
      setError(error.message);
    }
  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Register</h2>
        </div>
      </div>
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm" onSubmit={register}>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="password" id="name" placeholder="Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="rePass" id="subject" placeholder="Confirm Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password"
                    value={user.rePass}
                    onChange={(e) => setUser({ ...user, rePass: e.target.value })}
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="text-center"><button className="btn btn-primary" type="submit">Register</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}