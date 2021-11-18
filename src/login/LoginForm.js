// import React from "react";
// import "../styles/LoginForms.css";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
// import useForm from "./useForm";
// import validate from "./Validate";

// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";

// toast.configure();
// const LoginForm = ({ submitForm }) => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { handleChange, handleSubmit, values, errors, handleSignupSubmit } =
//     useForm(submitForm, validate);

//   const [redirect, setRedirect] = useState(false);

//   const signup = (e) => {
//     e.preventDefault();
//     handleSignupSubmit(e);
//     if (Object.keys(validate(values)).length === 0) {
//       axios
//         .post("http://localhost:2000/api/auth/signup", {
//           name: values.name,
//           email: values.email,
//           password: values.password,
//           phone: values.phone,
//         })
//         .then((res) => {
//           setRedirect(true);
//           console.log(res.data);
//         })
//         .catch((error) => {
//           const ErrorMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//           toast(ErrorMessage, {
//             type: "error",
//           });
//         });
//     }
//   };

//   const login = (e) => {
//     e.preventDefault();
//     handleSubmit(e);
//     console.log(validate(values, true));
//     if (Object.keys(validate(values, true)).length === 0) {
//       axios
//         .post("http://localhost:2000/api/auth/login", {
//           name: values.name,
//           password: values.password,
//         })
//         .then((res) => {
//           setRedirect(true);
//         })
//         .catch((error) => {
//           const ErrorMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//           console.log(error);
//           toast(ErrorMessage, {
//             type: "error",
//           });
//         });
//     }
//   };

//   const form = (
//     <div className="main">
//       <div className="loginFormContainer">
//         <input type="checkbox" id="flip" />

//         <div className="cover">
//           <div className="loginFront">
//             <div className="backImg"></div>
//             <div className="img"></div>
//           </div>
//           <div className="loginBack">
//             <div className="backImg">
//               <div className="img"></div>
//             </div>
//           </div>
//         </div>
//         <div className="forms">
//           <div className="form-content">
//             <div className="login-form">
//               <div className="title">Login</div>
//               <form onSubmit={login}>
//                 <div className="input-boxes">
//                   <div className="input-box">
//                     <i className="fas fa-envelope"></i>

//                     <input
//                       className="formInput"
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       value={values.name}
//                       onChange={handleChange}
//                       required
//                     />
//                     <br />
//                   </div>
//                   {errors.name && <p className="error">{errors.name}</p>}
//                   <div className="input-box">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       className="formInput"
//                       type="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={values.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>{" "}
//                   {errors.password && (
//                     <p className="error">{errors.password}</p>
//                   )}
//                   <div className="text">
//                     <a href="#">Forgot password?</a>
//                   </div>
//                   <div className="button input-box">
//                     <button
//                       className="button-input-box"
//                       type="submit"
//                       value="Sumbit"
//                       name="Login"
//                     >
//                       Login
//                     </button>
//                   </div>
//                   <div className="text sign-up-text">
//                     Don't have an account?
//                     <label for="flip">Sign-up now</label>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="signup-form">
//               <div className="title">Signup</div>
//               <form onSubmit={signup}>
//                 <div className="input-boxes">
//                   <div className="input-box">
//                     <i className="fas fa-user"></i>
//                     <input
//                       name="name"
//                       type="text"
//                       placeholder="Enter your name"
//                       value={values.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   {errors.name && <p className="error">{errors.name}</p>}
//                   <div className="input-box">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                       name="email"
//                       type="text"
//                       placeholder="Enter your email"
//                       value={values.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   {errors.email && <p className="error">{errors.email}</p>}
//                   <div className="input-box">
//                     <i className="fas fa-lock"></i>
//                     <input
//                       name="password"
//                       type="password"
//                       placeholder="Set your password"
//                       value={values.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   {errors.password && (
//                     <p className="error">{errors.password}</p>
//                   )}
//                   <div className="input-boxes">
//                     <div className="input-box">
//                       <i className="fas fa-phone"></i>
//                       <input
//                         name="phone"
//                         type="text"
//                         placeholder="Enter your phone number"
//                         value={values.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>{" "}
//                     {errors.phone && <p className="error">{errors.phone}</p>}
//                     <div className="input-boxes">
//                       <div className="button input-box">
//                         <button
//                           className="button-input-box"
//                           type="submit"
//                           value="Sumbit"
//                           name="Login"
//                         >
//                           Sign Up
//                         </button>
//                       </div>
//                       <div className="text sign-up-text">
//                         Already have an account?{" "}
//                         <label for="flip">Login now</label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return redirect ? <Redirect to="/menu" /> : form;
// };

// export default LoginForm;

import React from "react";
import "../styles/LoginForms.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import useForm from "./useForm";
import validate from "./Validate";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

toast.configure();
const LoginForm = ({ submitForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleChange, handleSubmit, values, errors, handleSignupSubmit } =
    useForm(submitForm, validate);

  const [redirect, setRedirect] = useState("");

  const signup = (e) => {
    e.preventDefault();
    handleSignupSubmit(e);
    if (Object.keys(validate(values)).length === 0) {
      axios
        .post("http://localhost:2000/api/auth/signup", {
          name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phone,
        })
        .then((res) => {
          setRedirect(true);
          console.log(res.data);
        })
        .catch((error) => {
          const ErrorMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          toast(ErrorMessage, {
            type: "error",
          });
        });
    }
  };

  const login = (e) => {
    e.preventDefault();
    handleSubmit(e);
    console.log(validate(values, true));
    if (Object.keys(validate(values, true)).length === 0) {
      axios
        .post("http://localhost:2000/api/auth/login", {
          name: values.name,
          password: values.password,
        })
        .then((res) => {
          // setRedirect(true);
          const user = res.data.data;
          localStorage.setItem("user", JSON.stringify(user));
          if (user.role === "admin") {
            setRedirect("/admin");
            window.location.reload();
          } else if (user.role === "client") {
            setRedirect("/menu");
            window.location.reload();
          }
        })
        .catch((error) => {
          const ErrorMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(error);
          toast(ErrorMessage, {
            type: "error",
          });
        });
    }
  };

  const form = (
    <div className="main">
      <div className="loginFormContainer">
        <input type="checkbox" id="flip" />

        <div className="cover">
          <div className="loginFront">
            <div className="backImg"></div>
            <div className="img"></div>
          </div>
          <div className="loginBack">
            <div className="backImg">
              <div className="img"></div>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={login}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>

                    <input
                      className="formInput"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                    <br />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      className="formInput"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </div>{" "}
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <button
                      className="button-input-box"
                      type="submit"
                      value="Sumbit"
                      name="Login"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?
                    <label for="flip">Sign-up now</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={signup}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.email && <p className="error">{errors.email}</p>}
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      name="password"
                      type="password"
                      placeholder="Set your password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-phone"></i>
                      <input
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        value={values.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>{" "}
                    {errors.phone && <p className="error">{errors.phone}</p>}
                    <div className="input-boxes">
                      <div className="button input-box">
                        <button
                          className="button-input-box"
                          type="submit"
                          value="Sumbit"
                          name="Login"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="text sign-up-text">
                        Already have an account?{" "}
                        <label for="flip">Login now</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return redirect ? <Redirect to={redirect} /> : form;
};

export default LoginForm;
