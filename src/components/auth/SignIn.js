import React, { useState, useContext } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import $ from "jquery";
import { signIn, LoginWithGoogle } from "../../crudFunctions/authFunctions";
import { AuthContext } from "../../contexts/authContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, authState, authData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".sign-in-section h1").addClass("changed");

    signIn(email, password, dispatch);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    $(".sign-in-section h1").addClass("changed");
    LoginWithGoogle(dispatch);
  };

  const uid = authState && authState.uid;

  const status = authData.errorMessage;
  var loginCode = authData.loginCode;
  console.log(loginCode);
  if (loginCode === 100) {
    $(".sign-in-section h1").removeClass("changed");
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  const dinText = "<Coders Gala/>";

  if (uid) return <Redirect to="/" />;
  return (
    <div className="login-form-container">
      <Helmet>
        <title>Coders Gala-LogIn</title>
        <meta name="description" content="Coders Gala LogIn Page" />
        <meta name="robots" content="index follow" />
      </Helmet>
      <div className="login-container">
        <div className="login-form">
          <div className="sign-in-section">
            <h6 className="dinTag"></h6>
            <h1>Log in</h1>
            <p>Hey, Welcome Back !!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  className="user-input"
                  required
                  placeholder="example@mail.com"
                />
              </div>
              <div className="htmlForm-field">
                <label htmlFor="password">Password</label>
                <input
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  className="pass-input"
                  placeholder="*********"
                />
              </div>
              <div className="form-options">
                <div className="checkbox-field">
                  <label htmlFor="rememberMe">Forgot Password?</label>
                </div>
                <NavLink to="/signup">SignUp</NavLink>
              </div>
              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="Submit"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <h3>OR</h3>
              </div>
              <div onClick={handleGoogleLogin} className="form-field">
                <div style={{ textAlign: "center" }} className="btn btn-signin">
                  Continue with{" "}
                  <img
                    style={{ width: "30px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                </div>
              </div>
              <div style={{ fontWeight: "500" }} className="text-danger">
                {status}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
