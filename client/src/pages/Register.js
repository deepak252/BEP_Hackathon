import React, { useState, useContext } from "react";
import classes from "./Auth.module.scss";
import { sendRegisterDetails } from "../Api";
import UserContext from "../utils/context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const submitThis = async (event) => {
    event.preventDefault();
   

    try {
      const token = await sendRegisterDetails(email, password, name);
      userContext.onLogin(token);
      navigate("/");
    } catch (error) {
      navigate("/signup");
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <form className={classes["form"]} action="" onSubmit={submitThis}>
      <h3>Register</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter email"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
