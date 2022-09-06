import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user,loading,err] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value);
    }

    const handleRegister = e =>{
        e.preventDefault();
        console.log(email,password,confirmPassword);
        if(password.length<6){
            setError("Password must be at least 6 characters");
            return;
        }
        if(password !== confirmPassword){
            setError("Password does not match");
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    if(user){
        navigate("/home");
    }


  return (
    <section className="login">
      <div className="container">
        <p className="form-title">Sign up</p>
        <form onSubmit={handleRegister} action="">
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <input onChange={handlePassword}
              required
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            />
          </div>
          <div className="input-grp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleConfirmPassword}
              required
              type="password"
              name="confirmPassword"
              id="pass"
              placeholder="Password"
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <p style={{color:"red"}}>{error && error}</p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Lato",
            fontStyle: "nomral",
            fontWeight: "400",
            fontSize: "17px",
            color: "#95A0A7",
            marginTop: "30px",
          }}
        >
          ━━━━━━━━━━━ or ━━━━━━━━━━━
        </p>
        <input className="btn-google" type="button" value="Google Sign In" />
      </div>
    </section>
  );
};

export default Signup;
<h1>Sign up</h1>;
