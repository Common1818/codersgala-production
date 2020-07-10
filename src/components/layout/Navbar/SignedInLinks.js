import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { signOut } from "../../../crudFunctions/authFunctions";
import { AuthContext } from "../../../contexts/authContext";

const SignedInLinks = () => {
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 500) {
        $(".nav-item a").click(() => {
          $("html, body").animate({ scrollTop: 250 }, 100);
        });
      }
    }
  }, []);

  const handleSignout = () => {
    signOut(dispatch);
  };

  return (
    <div>
      <ul className="navbar-nav ml-auto py-4 py-md-0">
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink
            className="nav-link "
            to="/learn"
            role="button"
            aria-expanded="false"
          >
            Learn
          </NavLink>
          <div className="dropdown-menu"></div>
        </li>

        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a
            href="/"
            type="button"
            onClick={handleSignout}
            className="nav-link"
          >
            LogOut
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
