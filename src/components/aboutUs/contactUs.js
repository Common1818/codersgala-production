import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-heading">
        <div class="contact text-center">
          <a name="contact"></a>
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <h2>
                  Connect with <span className="logo">Coders Gala</span> On:{" "}
                </h2>
              </div>
            </div>

            <div class="row social-media-row-1">
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a
                  rel="nofollow"
                  href="https://www.facebook.com/tashfeen.choudhury"
                >
                  <i class="fa fa-envelope"></i>
                </a>
              </div>
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a rel="nofollow" href="https://twitter.com/tashmchy">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a rel="nofollow" href="https://twitter.com/tashmchy">
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a
                  rel="nofollow"
                  href="https://www.linkedin.com/profile/view?id=AAIAABms3KcBtc_riyoK4ki6aXd96vrrJ9KzI9k&trk=nav_responsive_tab_profile"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a rel="nofollow" href="https://github.com/tashfeenMustafa">
                  <i class="fa fa-github"></i>
                </a>
              </div>
              <div class="icon col-xs-4 col-sm-4 col-md-4">
                <a rel="nofollow" href="https://github.com/tashfeenMustafa">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
