import React from "react";
import "../App.css";

//Importing Images
import logo from "../images/Logo.svg";

//Importing other packages
import { Link } from "react-router-dom";

//Importing Components

const LoggedInNav = ({ showCart, linkTo, hideCart }) => {
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
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <button className="cart-btn" style={hideCart}>
            <i className="fa fa-shopping-cart" onClick={showCart}></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoggedInNav;
