import React from "react";
import "../App.css";

// Importing Images
import logo from "../images/Logo.svg";
import backArrow from "../images/Back Arrow.svg";
import foodOrderBg from "../images/Food Order BG.svg";
import bookHallBg from "../images/Book Hall BG.svg";
import foodOrderSeparator from "../images/Food Order Separator.svg";
import bookHallSeparator from "../images/Book Hall Separator.svg";

// Importing other packages
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <>
      <div className="options-section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width="200px" />
          </Link>
        </div>
        <div className="options-section-title">
          <Link to="/">
            <img src={backArrow} alt="" width="35px" />
          </Link>
          <h1>
            Welcome, <br /> Dear User
          </h1>
          <p>Select one of the options below</p>
        </div>
        <div className="options">
          <div className="option-1">
            <img src={foodOrderBg} alt="" width="400px" />
            <div className="option-1-content">
              <h1>Food Order</h1>
              <img src={foodOrderSeparator} alt="" width="100px" />
              <p>
                Advance order food for dine-in or takeaway. You can also reserve
                tables from here
              </p>
              <Link to="/food-order">
                <img
                  className="front-arrow"
                  src={backArrow}
                  alt=""
                  width="35px"
                />
              </Link>
            </div>
          </div>
          <div className="option-2">
            <img src={bookHallBg} alt="" width="400px" />
            <div className="option-2-content">
              <h1>Book Hall</h1>
              <img src={bookHallSeparator} alt="" width="100px" />
              <p>
                Browse through halls that are available at your desired date and
                time
              </p>
              <Link to="/book-halls">
                <img
                  className="front-arrow"
                  src={backArrow}
                  alt=""
                  width="35px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option;
