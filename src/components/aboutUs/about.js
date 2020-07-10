import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import TopSlide from "./TopSlide";
import AboutDin from "./aboutDin";
import AboutUs from "./aboutUs";
import Footer from "../layout/Footer/Footer";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Coders Gala - about</title>
        <meta
          name="description"
          content="DoItNow is a free platform to learn webdevelopment for freelancing"
        />
        <meta name="robots" content="index follow" />
      </Helmet>
      <div className="about-page">
        <div className="banner-ad-right"></div>
        <div className="scroller">
          <section className="about-header">
            <TopSlide />
          </section>
          <section className="main">
            <AboutDin />
          </section>
          <section id="aboutus">
            <AboutUs />
          </section>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default About;
