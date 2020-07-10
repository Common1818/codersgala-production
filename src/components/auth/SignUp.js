/* eslint-disable */
import React, { useState, useContext } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/authContext";
import { signUp } from "../../crudFunctions/authFunctions";
import $ from "jquery";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [codeReferred, setCodeReferred] = useState("");
  const { authData, authState, dispatch } = useContext(AuthContext);

  const uid = authState && authState.uid;

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".sign-in-section h1").addClass("changed");

    signUp(
      { email, password, firstName, lastName, age, codeReferred },
      dispatch
    );
  };

  const errorMessage = authData.errorMessage;
  const { referCode } = props.match.params;

  if (uid) return <Redirect to="/" />;
  const dinText = "<Coders Gala/>";
  return (
    <div className="login-form-container">
      <Helmet>
        <title>Coders Gala - SignUp</title>
        <meta name="description" content="Coders Gala SignUp page." />
      </Helmet>
      <div className="login-container">
        <div className="login-form">
          <div className="sign-in-section">
            <h6 className="dinTag"></h6>
            <h1>SignUp</h1>
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
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  id="lastName"
                  className="form-control"
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  id="lastName"
                  className="form-control"
                  required
                  placeholder="Last Name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="age">Age</label>
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  id="age"
                  className="form-control"
                  required
                  placeholder="Age"
                />
              </div>
              <div className="form-field">
                <label htmlFor="codeReferred">Refer Code</label>
                {referCode != null ? (
                  <input
                    type="text"
                    id="codeReferred"
                    defaultValue={referCode}
                    className="form-control"
                    onChange={(e) => {
                      setCodeReferred(e.target.value);
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    id="codeReferred"
                    className="form-control"
                    onChange={(e) => {
                      setCodeReferred(e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="form-options">
                <div className="checkbox-field">
                  <label htmlFor="rememberMe">Forgot Password?</label>
                </div>
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="Submit"
                />
              </div>

              <div className="text-danger text-center text-uppercase">
                {errorMessage && errorMessage.message}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// <div className="container">
//   <Helmet>
//     <title>DoItNow - SignUp</title>
//     <meta name="description" content="DoItNow SignUp page." />
//   </Helmet>
//   <form onSubmit={handleSubmit}>
//     <h5>Sign Up</h5>
//     <div className="form-group">
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="firstName">First Name</label>
//       <input
//         type="text"
//         id="firstName"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setFirstName(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         type="text"
//         id="lastName"
//         required
//         className="form-control"
//         onChange={(e) => {
//           setLastName(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="age">Age</label>
//       <input
//         type="number"
//         id="age"
//         required
//         min="1"
//         max="100"
//         className="form-control"
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="codeReferred">Refer Code</label>
//       {referCode != null ? (
//         <input
//           type="text"
//           id="codeReferred"
//           defaultValue={referCode}
//           className="form-control"
//           onChange={(e) => {
//             setCodeReferred(e.target.value);
//           }}
//         />
//       ) : (
//         <input
//           type="text"
//           id="codeReferred"
//           className="form-control"
//           onChange={(e) => {
//             setCodeReferred(e.target.value);
//           }}
//         />
//       )}
//       <span className="help-block">Optional</span>
//     </div>
//     <div>
//       <button type="submit" className="btn btn-danger">
//         SignUp
//       </button>
//     </div>
//     <div className="text-danger text-center text-uppercase">
//       {authError ? <p>{authError}</p> : null}
//     </div>
//   </form>
// </div>;
