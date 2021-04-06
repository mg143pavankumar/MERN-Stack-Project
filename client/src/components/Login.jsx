import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signupImg from "../images/signup_img.png";

const Login = () => {
  return (
    <>
      <section className="signup">
        <div className="signup__container">
          <div className="signup-content reverse_login">
            <div className="signup-form ">
              <h2 className="form-tittle">Sign In</h2>
              <form className="signin-form" id="signin-form">
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
                <div className="form-group form-button">
                  <input
                    type="button"
                    value="Sign In"
                    id="signin"
                    className="form-submit btn-primary"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signupImg} alt="signupImage" />
              </figure>

              <NavLink to="/register" className="singup-image-link">
                I don't have an account?
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
