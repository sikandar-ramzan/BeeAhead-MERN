import React from "react";
import "../App.css";

// Importing Components
import Nav from "./Nav";

// Importing Images
import aboutImage from "../images/About Us.svg";
import hiveBackdrop from "../images/Hive Backdrop.svg";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-section">
        <div className="about-section-left">
          <h1>About Us</h1>
          <p>
            We are an organization who is helping <br /> people by providing
            ease in ordering food and <br /> booking halls for event. We are
            based in Karachi and started as a 3-men team
          </p>
        </div>
        <div className="about-section-right">
          <img src={aboutImage} alt="About" width="500px" />
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

export default About;
