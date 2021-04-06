import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { MdPerson, MdEmail, MdPhone, MdWork } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signupImg from "../images/signup_img.png";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="signup__container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-tittle">Sign Up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <MdPerson />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <MdEmail />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <MdPhone />
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <MdWork />
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <RiLockPasswordFill />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <RiLockPasswordFill />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="button"
                    value="Register"
                    id="signup"
                    className="form-submit btn-primary"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signupImg} alt="signupImage" />
              </figure>

              <NavLink to="/login" className="singup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
