/* eslint-disable */
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion, Button, Col, Row } from "react-bootstrap";

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// jQuery-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// import $ from "jquery";

import { AuthContext } from "../../../contexts/authContext";
import { getProfile } from "../../../crudFunctions/authFunctions";
import { updateMode } from "../../../crudFunctions/modeFunctions";
import { ModeContext } from "../../../contexts/modeContext";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import $ from "jquery";

const Navbar = (props) => {
  const { authData, authState, dispatch } = useContext(AuthContext);
  const dispatch2 = useContext(ModeContext).dispatch;
  // To refresh the page so that new profile gets loaded
  if (authData.reloadPage === 100) {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }
  // -------------------------------------------------

  useEffect(() => {
    getProfile(dispatch);
  }, [authState]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 767) {
        $("body .logo").css({
          "font-size": "2rem",
        });
        $(".dropdown-accordion").removeClass("dropdown-accordion");
      }

      $(window).resize(function () {
        if (window.innerWidth >= 767) {
          $("body .logo").css({
            "font-size": "2rem",
          });
          $(".dropdown-accordion").removeClass("dropdown-accordion");
        } else {
          $("body .logo").css({
            "font-size": "1.2rem",
          });
        }
      });
    }

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  }, []);

  // Getting the current mode from local storage
  if (typeof window !== "undefined") {
    let mode = "light";

    mode = localStorage.getItem("mode");

    if (mode === "dark") {
      $("body").addClass("dark");
      $(".mode-icon").attr("src", "https://www.svgrepo.com/show/3158/moon.svg");
      $("#circle").css("background-color", "#111");
      $(".switch").addClass("switched");
    } else {
      $("body").removeClass("dark");
      $(".mode-icon").attr("src", "https://www.svgrepo.com/show/83726/sun.svg");
      $("#circle").css("background-color", "#f1f1f1");
      $(".switch").removeClass("switched");
    }
  }

  //

  const credentials = authData.userProfile;

  const userUid = authState && authState.uid;
  const profileCompleted = authData && authData.userProfile;
  const profileUpdated = profileCompleted && profileCompleted.hasUpdatedProfile;
  // console.log(profile);

  const links = userUid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <Accordion className="dropdown-accordion">
          <Row>
            <Col>
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <span className="navbar-brand logo  nav-link">
                    Coders Gala
                  </span>
                </Link>
                <div
                  id="switch"
                  onClick={() => {
                    if (localStorage.getItem("mode") === "light") {
                      updateMode("dark", dispatch2);
                    } else {
                      updateMode("light", dispatch2);
                    }

                    if ($("body").hasClass("dark")) {
                      $("body").removeClass("dark");
                      localStorage.setItem("mode", "light");
                      $(".mode-icon").attr(
                        "src",
                        "https://www.svgrepo.com/show/83726/sun.svg"
                      );
                      $("#circle").css("background-color", "#f1f1f1");
                      $(".switch").removeClass("switched");
                    } else {
                      $("body").addClass("dark");
                      localStorage.setItem("mode", "dark");
                      $(".mode-icon").attr(
                        "src",
                        "https://www.svgrepo.com/show/3158/moon.svg"
                      );
                      $("#circle").css("background-color", "#111");
                      $(".switch").addClass("switched");
                    }
                    // window.location.reload();
                  }}
                  className="switch float-right"
                >
                  <div id="circle">
                    <img
                      className="mode-icon"
                      style={{ width: "20px" }}
                      alt=""
                    />
                  </div>
                </div>

                {authState ? (
                  <div className="points-box ">
                    <div>
                      <span className="points-text"> Points </span>
                      <span>
                        <img
                          src="https://image.flaticon.com/icons/svg/715/715709.svg"
                          className="points-img"
                        />
                      </span>
                      <span> {credentials && credentials.points} </span>
                    </div>
                  </div>
                ) : null}

                <div className="signed-links">{links}</div>

                <Accordion.Toggle
                  className="nav-btn"
                  onClick={() => {
                    if ($(".navbar-toggler").attr("aria-expanded") == "false") {
                      $(".navbar-toggler").attr("aria-expanded", "true");
                    } else {
                      $(".navbar-toggler").attr("aria-expanded", "false");
                    }
                  }}
                  as={Button}
                  variant="link"
                  eventKey="5"
                >
                  <a
                    className="navbar-toggler"
                    type="button"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </a>
                </Accordion.Toggle>
                <Accordion.Collapse
                  className=" "
                  id="navbarSupportedContent"
                  eventKey="5"
                >
                  <div>{links}</div>
                </Accordion.Collapse>
              </nav>
            </Col>
          </Row>
        </Accordion>
      </div>
    </div>
  );
};

export default Navbar;
