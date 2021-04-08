import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useHistory } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signupImg from "../images/signup_img.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = response.json();

    if (response.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");

      history.push("/");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="signup__container login__container">
          <div className="signup-content reverse_login">
            <div className="signup-form login_form">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="button"
                    value="Sign In"
                    id="signin"
                    onClick={loginUser}
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
