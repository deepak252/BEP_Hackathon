import React,{useState} from 'react' 
import classes from "./Auth.module.scss"
import {sendLoginDetails} from "../Api"

const Login = ()=>{
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");
	
	const submitThis=(event)=>{
		event.preventDefault()
		console.log("calling send login details function");
		sendLoginDetails(email, password);
	}
	return (
		<form className={classes["form"]} action="" onSubmit={submitThis}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
			name="email"
			id="email"
			value={email}
			onChange={(e)=>setEmail(e.target.value)}
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
			onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
	  );
}

export default Login;