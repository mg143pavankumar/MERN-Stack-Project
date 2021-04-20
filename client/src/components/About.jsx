import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  let data;
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("data not found");
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <>
      <div className="container emp__profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src="" alt="profile img" />
            </div>

            <div className="col-md-6 ">
              <div className="progile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home_tab"
                      data-toggle="tab"
                      href="#home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile_tab"
                      data-toggle="tab"
                      href="#profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile__edit__btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile__work">
                <p>WORK LINK</p>
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
                <a href="https://github.com/mg143pavankumar" target="_blank">
                  Github
                </a>
                <br />
              </div>
            </div>

            <div className="col-md-8 pl-5 about__info">
              <div className="tab-content profile-tab" id="myTabContent">
                dfg
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
