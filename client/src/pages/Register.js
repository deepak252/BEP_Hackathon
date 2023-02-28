import React,{useState} from 'react' 
import classes from "./Auth.module.scss"
import { sendRegisterDetails } from "../Api"
import register from "./Register.module.scss"

const Register = ()=>{
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");
    const [name, setName]=useState("");
    const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	
	const submitThis = (event)=>{
		event.preventDefault()
		console.log("calling send login details function");
		sendRegisterDetails(email, password, name);
	}
	return (
    <div className={register["register-div"]}>
      <form action="" onSubmit={submitThis}>
        <h1>Register</h1>
        {/* <hr></hr> */}
        <div className="">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
			name="email"
			id="email"
			value={email}
			onChange={(e)=>{
        if (!(emailRegex.test(e.target.value))){
          setEmailError("please enter a valid email")
        }
        else{
          setEmailError("")
        }
        setEmail(e.target.value)
      }}
          />
        <p style={{color: "red"}}>{emailError}</p>
        </div>




        <div className="">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
			name="name"
			id="name"
			value={name}
			onChange={(e)=>setName(e.target.value)}
          />
        </div>



        <div className="">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
			name="password"
			id="password"
			value={password}
			onChange={(e)=>{
        console.log("hello")
        if (!(passwordRegex.test(e.target.value))){
          setPasswordError("please enter a valid password")
        }
        else{
          setPasswordError("")
        }
        setPassword(e.target.value)
      }
      }
        />
        <p style={{color: "red"}}>
          {passwordError}
        </p>
          
        </div>
      </form>
      <div>
          <button type="submit" className={register["primary-btn"]}>
            Submit
          </button>
        </div>
        <hr></hr>
        <div >
          <button type="submit" className={register["secondary-btn"]}>
            register
          </button>
        </div>
    </div>
		
	  );
}

export default Register