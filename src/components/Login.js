import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/authService.js";

export default function Login({ history }) {

  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userDetails = await login(user.email, user.password);
      setUser({ email: '', password: '' });
      if (userDetails.name !== "FirebaseError") {
        navigate('/bookshelf',{replace:true});
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Login</h2>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm" onSubmit={signIn}>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="subject" id="subject" placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </div>
                <div className="text-center"><button type="submit">Sign in</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )


}