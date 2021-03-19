import React from "react";
import "../App.css";

//Importing Images
import logo from "../images/Logo.svg";

//Importing other packages
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navStyle">
      <img src={logo} alt="" width="200px" />
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="nav-buttons">
        <Link to="/newlogin">
          <button className="button-style login-btn">Log In</button>
        </Link>
        <Link to="/newsignup">
          <button className="button-style signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
