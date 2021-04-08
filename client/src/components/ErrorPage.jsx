import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="notfound">
      <div className="error__container">
        <div className="notfound_404">
          <h1>404</h1>
        </div>
        <div className="content">
          <h2>We are sorry, page not found!</h2>
          <p className="para">
            The page you are looking for might have been removed or had its name
            chnaged or is tempararily unaviable.
          </p>

          <NavLink to="/" className="__btn">
            Back to Homepage
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
