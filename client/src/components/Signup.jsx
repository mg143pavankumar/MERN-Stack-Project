import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useHistory } from "react-router-dom";
import { MdPerson, MdEmail, MdPhone, MdWork } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signupImg from "../images/signup_img.png";

const Signup = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleTextField = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postResisterData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await response.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successful");

      history.push("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="signup__container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-tittle">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <MdPerson />
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleTextField}
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
                    value={user.email}
                    id="email"
                    autoComplete="off"
                    onChange={handleTextField}
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
                    value={user.phone}
                    id="phone"
                    autoComplete="off"
                    onChange={handleTextField}
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
                    value={user.work}
                    id="work"
                    autoComplete="off"
                    onChange={handleTextField}
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
                    value={user.password}
                    id="password"
                    autoComplete="off"
                    onChange={handleTextField}
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
                    value={user.cpassword}
                    id="cpassword"
                    autoComplete="off"
                    onChange={handleTextField}
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="button"
                    onClick={postResisterData}
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
