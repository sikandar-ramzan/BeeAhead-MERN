import React, { Component } from "react";

// Importing other packages
import { Link } from "react-router-dom";

//Importing Images
import logo from "../images/Logo.svg";

export default class SignUp extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>
              <img src={logo} style={{ height: "60px" }} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="pagename">
                <b>For Customers</b>
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <form>
          <h3>Sign Up</h3>

          <div className="form-group" className="login" className="signup">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="email" />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>Mobile Number</label>
            <input
              type="password"
              className="form-control"
              placeholder="Mobile Numbers"
            />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
            />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>CNIC</label>
            <input
              type="password"
              className="form-control"
              placeholder="CNIC"
            />
          </div>

          <div className="form-group" className="login" className="signup">
            <label>Upload Document</label>
            <input
              type="text"
              className="form-control"
              placeholder="Upload Document"
            />
          </div>

          <button type="submit" className="btn btn-warning btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </>
    );
  }
}
