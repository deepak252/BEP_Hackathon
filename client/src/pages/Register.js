import React,{useState} from 'react' 
import classes from "./Auth.module.scss"
import { sendRegisterDetails } from "../Api"

const Register = ()=>{
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");
    const [name, setName]=useState("");
	
	const submitThis = (event)=>{
		event.preventDefault()
		console.log("calling send login details function");
		sendRegisterDetails(email, password, name);
	}
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
			onChange={(e)=>setEmail(e.target.value)}
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
			onChange={(e)=>setName(e.target.value)}
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

export default Register