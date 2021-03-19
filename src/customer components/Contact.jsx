import React from "react";
import "../App.css";

// Importing Components
import Nav from "./Nav";

// Importing Images
import contactImage from "../images/Contact Us.svg";
import facebookIcon from "../images/Facebook Icon.svg";
import instagramIcon from "../images/Instagram Icon.svg";
import twitterIcon from "../images/Twitter Icon.svg";
import hiveBackdrop from "../images/Hive Backdrop.svg";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact-section">
        <div className="contact-section-left">
          <img src={contactImage} alt="Contact" width="500px" />
        </div>
        <div className="contact-section-right">
          <h1>Contact Us</h1>
          <p>
            If you have any queries or need information <br /> about something,
            you can always send us a message on our social media
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="__blank">
              <img src={facebookIcon} alt="Facebook Icon" width="15px" />
            </a>
            <a href="https://www.facebook.com" target="__blank">
              <img src={instagramIcon} alt="Instagram Icon" width="30px" />
            </a>
            <a href="https://www.facebook.com" target="__blank">
              <img src={twitterIcon} alt="Twitter Icon" width="30px" />
            </a>
          </div>
        </div>
        <img
          src={hiveBackdrop}
          alt=""
          className="hive-backdrop"
          width="400px"
        />
      </div>
    </>
  );
};

export default Contact;
