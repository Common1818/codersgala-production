import React from "react";
import { NavLink } from "react-router-dom";

const TopSection = () => {
  return (
    <section className="floatingHero">
      <div className="floatingHero-container">
        <img
          src="https://luna1.co/57d9b6.png"
          alt=""
          className="floatingHero-image -two -floatingDelay"
        />
        <img
          src="https://luna1.co/2070ee.png"
          alt=""
          className="floatingHero-image -three -floating"
        />
        <img
          src="https://luna1.co/fda860.png"
          alt=""
          className="floatingHero-image -four -floatingDelay"
        />

        <header className="floatingHero-header">
          <p className="floatingHero-label">This is...</p>

          <h1 className="floatingHero-headline ">Coders Gala</h1>

          <p className="floatingHero-description">
            Coders Gala is a free to use platform, that saves you from the
            hassle of finding resources to learn from ...
          </p>

          <NavLink to="/learn">
            <div className="video-play -coral -small -pulse"></div>
          </NavLink>
        </header>
      </div>
    </section>
  );
};

export default TopSection;
