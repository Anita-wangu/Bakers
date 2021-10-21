import React, { useState } from "react";
import "../styles/Login.css";
import useForm from "./useForm";
import validate from "./Validate";
import { Redirect } from "react-router-dom";
const Login = ({ submitForm }) => {
  const [state, setState] = useState("login-show");
  const [redirect, setRedirect] = useState(false);
  const handleSignupClick = () => {
    setState("signup-show");
  };
  const handleLoginClick = () => {
    setState("login-show");
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const onSubmit = (e) => {
    e.preventDefault();

    setRedirect(true);
  };

  const form = (
    <div className="loginContaier">
      <div className="loginWrapper">
        <div className="title-text">
          <div className={`title login ${state}`}>Login Form</div>
          <div className={`title signup`}>Signup Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label
              for="login"
              className="slide login"
              onClick={handleLoginClick}
            >
              Login
            </label>
            <label
              for="signup"
              className="slide signup"
              onClick={handleSignupClick}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form
              action="#"
              onSubmit={onSubmit}
              className={`login ${state}`}
              noValidate
            >
              <div className="field">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Username"
                  value={values.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Don't hava an account? <a href="">Signup now</a>
              </div>
            </form>
            <form
              action="#"
              onSubmit={handleSubmit}
              className="signup"
              noValidate
            >
              <div className="field">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Username"
                  value={values.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  value={values.password2}
                  onChange={handleChange}
                  required
                />
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="login-link">
                hava an account? <a href="">Login now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return redirect ? <Redirect to="/menu" /> : form;
};

export default Login;
