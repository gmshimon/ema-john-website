import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate();
    const location =useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword,user,loading,err,] = useSignInWithEmailAndPassword(auth);
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate(from,{replace:true});
    }
  return (
    <section className="login">
      <div className="container">
        <p className="form-title">Login</p>
        <form onSubmit={handleLogin} action="">
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail} required type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <input onChange={handlePassword} required type="password" name="password" id="pass" placeholder="Password"/>
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p style={{color: 'red'}}>{err?.message && err.message}</p>
        <p style={{textAlign: 'center'}}>New to Ema-John? <Link className="form-link"to="/signup">Create New Account</Link></p>
        <p style={{textAlign: 'center',fontFamily:'Lato',fontStyle:'nomral', fontWeight:'400',fontSize:'17px',color:'#95A0A7',marginTop:'30px'}}>━━━━━━━━━━━  or  ━━━━━━━━━━━</p>
        <input className="btn-google" type="button" value="Google Sign In" />
      </div>
    </section>
  );
};

export default Login;
