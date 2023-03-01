import React from "react";
import classes from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes["error-body"]}>
      <div className={classes["not-found-cloud"]}></div>
      <div className={classes["not-found-text"]}>
        Maybe this page is not what you're looking for! 😅
      </div>
      <Link to="/">
        <button className={classes["home-btn"]}>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default Error;
