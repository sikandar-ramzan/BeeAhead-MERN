import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

import "../App.css";

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
        <button className="button-style login-btn">Log In</button>
        <button className="button-style signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
