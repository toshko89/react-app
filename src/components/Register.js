import { useState } from "react";

export default function Register() {

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
              <form role="form" className="contactForm">
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="password" id="subject" placeholder="Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="rePass" id="subject" placeholder="Repeat Password" data-rule="minlen:6" data-msg="Please enter at least 6 chars for password" />
                  <div className="validation"></div>
                </div>

                <div className="text-center"><button type="submit" >Register</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}