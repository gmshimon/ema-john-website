import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <section className="login">
      <div className="container">
        <p className="form-title">Sign up</p>
        <form action="">
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <input required type="password" name="password" id="pass" placeholder="Password"/>
          </div>
          <div className="input-grp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input required type="password" name="confirmPassword" id="pass" placeholder="Password"/>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p style={{textAlign: 'center'}}>Already have an account? <Link className="form-link"to="/login">Login</Link></p>
        <p style={{textAlign: 'center',fontFamily:'Lato',fontStyle:'nomral', fontWeight:'400',fontSize:'17px',color:'#95A0A7',marginTop:'30px'}}>━━━━━━━━━━━  or  ━━━━━━━━━━━</p>
        <input className="btn-google" type="button" value="Google Sign In" />
      </div>
    </section>
    );
};

export default Signup;<h1>Sign up</h1>