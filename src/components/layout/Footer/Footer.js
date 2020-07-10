import React from "react";
import FooterSocialMedia from "./footerSocialMedia";
import FooterNewsletterForm from "./footerNewsletter";

const Footer = () => {
  return (
    <div className="footer-cont">
      <footer>
        <div className="banner-ad-bottom">
          <img
            style={{ width: "100%" }}
            src="https://lh3.googleusercontent.com/YeImnFkq_Odr8TAusX8men4U2DpS1GnXyJNJjKAKPe0z8GAqkrPoHGK9ob6_wKqqpHcPI6Mlo_dnv7QpMUWmA9LnihKViC_hSaO2WQ=s0"
            alt="ad"
          />
        </div>
        <div className="footer-container">
          <div className="left-col">
            <span className="logo">Coders Gala</span>
            <FooterSocialMedia />
            <p className="rights-text">
              &copy; 2020 Coders Gala , All Rights Reserved
            </p>
          </div>
          <FooterNewsletterForm />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
