import React, { useState, useRef } from "react";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [isTop, useIsTrue] = useState(true);
  const card = useRef(null);
  function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }
  function openLogin() {
    card.style.transform = "rotateY(0deg)";
  }

  return (
    <div className="container">
      <div className="card">
        <div className="inner-box" id="card">
          {isTop ? (
            <div className="card-front">
              <h2>Login</h2>
              <form>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter Your Username"
                  required
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Enter Your Password"
                  required
                />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <div className="remember">
                  <input type="checkbox" className="checkbox" />
                  <span> Remember Me</span>
                </div>
              </form>
              <button type="button" className="btn" onClick="openRegister()">
                I'm New Here
              </button>
              <a href="">Forgot Password</a>
            </div>
          ) : (
            <div className="card-back">
              <h2>Register</h2>
              <form>
                <input
                  type="Name"
                  className="input-box"
                  placeholder="Enter Your Full Name"
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter Your Username"
                  required
                />
                <input
                  type="email"
                  className="input-box"
                  placeholder="Enter Your Email"
                  required
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Enter Your Password"
                  required
                />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <input type="checkbox" />
                <span> Remember Me</span>
              </form>
              <button type="button" className="btn" onClick="openLogin()">
                I've an account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
