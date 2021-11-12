import { useState } from "react";
import { registerUser } from "../services/authService.js";

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRepass] = useState('');

  const regExForEmail = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i

  const register = async (e) => {
    e.preventDefault();
    if (password !== rePass) {
      alert('Password doesn\'t match');
      return;
    } else if (!regExForEmail.test(email)) {
      alert('Please enter a valid email');
      return;
    } else if (password.length < 6) {
      alert('Please enter at least 6 chars for password');
      return;
    }

    try {
      const userData = await registerUser(email, password);
      console.log(userData);
    } catch (error) {
      console.log(error);
      console.log(e.target);
    }


  }

  const handleChangeForm = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value.trim())
    } else if (e.target.name === 'password') {
      setPassword(e.target.value.trim())
    } else if (e.target.name === 'rePass') {
      setRepass(e.target.value.trim())
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
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" value={email} onChange={handleChangeForm} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" id="name" placeholder="Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password" value={password} onChange={handleChangeForm} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="rePass" id="subject" placeholder="Confirm Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password" value={rePass} onChange={handleChangeForm} />
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