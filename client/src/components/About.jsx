import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);

        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <div>
      About us page
      <form method="GET"></form>
    </div>
  );
};

export default About;
