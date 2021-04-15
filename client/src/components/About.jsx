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
    <div>
      <h1>This is about page</h1>
      <form method="GET">
        <h1>user Name: {userData.name}</h1>
      </form>
    </div>
  );
};

export default About;
