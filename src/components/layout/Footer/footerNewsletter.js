/* eslint-disable */
import React, { useState } from "react";
import $ from "jquery";

require("firebase/functions");

const FooterNewsletterForm = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbzqvgKzk3xx20JNS26szIIyJNI3FllBJRhOoQ4IY0fBEqLwU1_9/exec";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Enter Your Email here to subscribe for Newsletter"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".border").addClass("anim");
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $("form").serialize(),
    })
      .then(() => {
        $(".border").removeClass("anim");
        setMessage("YAY!! you'll now receive Coders Gala updates");
      })
      .catch((err) => {
        $(".border").removeClass("anim");
        setMessage("Error subsribing for newsletter");
      });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateObj = new Date();
  let month = monthNames[dateObj.getMonth()];
  let day = String(dateObj.getDate()).padStart(2, "0");
  let year = dateObj.getFullYear();
  let output = day + " " + month + "," + year;

  return (
    <div className="right-col">
      <h1>Our Newsletter</h1>
      <div className="border"></div>
      <p>{message}</p>
      <form onSubmit={handleSubmit} className=" form newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="Email"
          className="txtb"
          placeholder="Enter Your Email"
        />
        <input
          style={{ visibility: "hidden" }}
          defaultValue={output}
          type="text"
          name="Date"
        />
        <input type="submit" value="submit" className="btn" />
      </form>
    </div>
  );
};

export default FooterNewsletterForm;
