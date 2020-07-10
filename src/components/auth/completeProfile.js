import React, { useState, useContext } from "react";
import $ from "jquery";
import { Redirect } from "react-router-dom";
import { updateProfile } from "../../crudFunctions/authFunctions";
import { AuthContext } from "../../contexts/authContext";

const CompleteProfile = () => {
  const { authData, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".sign-in-section h1").addClass("changed");
    console.log({ firstName, lastName, age });
    updateProfile({ firstName, lastName, age }, dispatch);
  };
  const dinText = "<DoItNow/>";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  console.log(authData);
  const updateComplete = authData && authData.profileUpdateComplete;
  const hasUpdatedProfile =
    authData.userProfile && authData.userProfile.hasUpdatedProfile;
  console.log(updateComplete);
  // TO redirect if the profile is already updated
  if (hasUpdatedProfile === true) {
    return <Redirect to="/" />;
  }
  var message;
  if (updateComplete) {
    $(".sign-in-section h1").removeClass("changed");
    message = "Profile updarted refresh page to continue";
  }

  return (
    <div className="login-form-container">
      <div className="login-container">
        <div className="login-form">
          <div className="sign-in-section">
            <h6 className="dinTag">{}</h6>
            <h1>Update Your Profile</h1>
            <p>{message ? message : "update your profile to continue !!"}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  placeholder="Age"
                  id="age"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="Submit"
                />
              </div>
              {/* <div style={{ fontWeight: "500" }} className="text-danger">
                {status}
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
