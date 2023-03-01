import React, { useContext, useState } from "react";
import classes from "./Auth.module.scss";
import { sendLoginDetails } from "../Api";
import login from "./Login.module.scss";
import UserContext from "../utils/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const submitThis = async (event) => {
    event.preventDefault();

    try {
      const token = await sendLoginDetails(email, password);
      userContext.onLogin(token);
      navigate("/");
    } catch (error) {
      navigate("/login");
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    // classes.login-div
    <div className={login["login-div"]}>
      {/* className={classes["form"]} */}
      <form action="" onSubmit={submitThis}>
        <h1>Sign In</h1>
        {/* <hr></hr> */}
        {/* classes.email-div */}
        <div className="">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              if (!emailRegex.test(e.target.value)) {
                setEmailError("please enter a valid email");
              } else {
                setEmailError("");
              }
              setEmail(e.target.value);
            }}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>

        {/* classes.password-div */}
        <div className="">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <p style={{ color: "red" }}>{passwordError}</p>
        </div>
        <div>
          <button type="submit" className={login["primary-btn"]}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

{
  /* <div className="login">
            <h1>Login</h1>
            <input type="email" name="username" value={user.username} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div> */
}

export default Login;
