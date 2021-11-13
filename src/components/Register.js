import { useState } from "react";
import { registerUser } from "../services/authService.js";

export default function Register() {

  const [user, setUser] = useState({ email: '', password: '', rePass: '' });
  
  const regExForEmail = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i

  const register = async (e) => {
    e.preventDefault();
    if (!regExForEmail.test(user.email)) {
      alert('Please enter a valid email');
      setUser({ email: '', password: '', rePass: '' });
      return;
    } else if (user.password.length < 6) {
      alert('Please enter at least 6 chars for password');
      setUser({ email: '', password: '', rePass: '' });
      return;
    } else if (user.password !== user.rePass) {
      alert('Password doesn\'t match');
      setUser({ email: '', password: '', rePass: '' });
      return;
    }
    
    try {
      const userData = await registerUser(user.email, user.password);
      setUser({ email: '', password: '', rePass: '' });
      console.log(userData);
    } catch (error) {
      console.log(error);
      console.log(e.target);
    }
  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Register</h2>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form role="form" className="contactForm" onSubmit={register}>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" id="name" placeholder="Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="rePass" id="subject" placeholder="Confirm Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password"
                    value={user.rePass}
                    onChange={(e) => setUser({ ...user, rePass: e.target.value })}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="submit" value="Register" className="text-center" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}