import React from "react";
import $ from "jquery";
import { Row, Col } from "react-bootstrap";
import ProfileCard from "./profileCard";

const AboutUs = () => {
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (window.scrollY > 1550) {
        $(".profile-card").addClass("profile-card-anim");
      }
    }
  }

  return (
    <div className="about-us-container">
      <div>
        <div className="about-us-heading">
          <h2>
            About <span>Us</span>
          </h2>
        </div>
        <div className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
          dolore odit, neque itaque iure quas mollitia nihil cumque rem harum
          consequuntur consectetur. Autem fugit, doloribus sint enim error sequi
          quo rem minima magni excepturi expedita mollitia recusandae harum
          alias repellendus, sit voluptate facilis similique at in asperiores
          sunt inam saepe qui. Nisi minima ipsa illo tempore quod enim eum
          quidem?
        </div>
      </div>
      <div className="profile-cards">
        <Row>
          <Col lg={6}>
            <ProfileCard
              data={{
                name: "Priya",
                portfolioUrl: "priyabihaniportfolio.firebaseapp.com",
                instaUrl: "https://www.instagram.com/bihani.priya",
                githubUrl: "https://www.github.com",
                twitterUrl: "https://www/twitter.com",
                bio:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis.",
              }}
            />
          </Col>

          <Col lg={6}>
            <ProfileCard
              data={{
                name: "Kartik",
                portfolioUrl: "https://google.com",
                instaUrl: "https://www.instagram.com/gkartik18/",
                githubUrl: "https://www.github.com",
                twitterUrl: "https://www/twitter.com",
                bio:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis.",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
