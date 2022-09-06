import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <p className="form-title">Login</p>
        <form action="">
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <input required type="email" name="password" id="pass" placeholder="Password"/>
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p style={{textAlign: 'center'}}>New to Ema-John? <Link className="form-link"to="/signup">Create New Account</Link></p>
        <p style={{textAlign: 'center',fontFamily:'Lato',fontStyle:'nomral', fontWeight:'400',fontSize:'17px',color:'#95A0A7',marginTop:'30px'}}>━━━━━━━━━━━  or  ━━━━━━━━━━━</p>
        <input className="btn-google" type="button" value="Google Sign In" />
      </div>
    </section>
  );
};

export default Login;
