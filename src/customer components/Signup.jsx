import React, { useState } from "react";

// Importing other packages
import { Link } from "react-router-dom";
import axios from "axios";

//Importing Images
import logo from "../images/Logo.svg";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const setEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(e.target.value);
  };
  const setPassword = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(e.target.value);
  };
  const userSubmit = (e) => {
    e.preventDefault();
    const displayUser = {
      email: user.email,
      password: user.password,
    };

    console.log(displayUser);
    window.location = "/";
    axios
      .post("http://localhost:5000/auth/register", displayUser)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <div className="cust-signup-section">
        <nav className="login-signup-nav">
          <div className="logo">
            <img src={logo} alt="" width="200px" />
            <h1>For Customers</h1>
          </div>
          <div className="buttons">
            <Link to="/newlogin">
              <button className="button-style signup-btn">Login</button>
            </Link>
          </div>
        </nav>
        <div className="signup-form">
          <form onSubmit={userSubmit}>
            <div className="col-1">
              <div className="row-1">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" VALUE={user.email} onChange={setEmail} />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    VALUE={user.password}
                    onChange={setPassword}
                  />
                </div>
              </div>
              {/* <div className="row-1">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" />
                </div>
              </div>
              <div className="row-1">
                <div className="form-group">
                  <label htmlFor="">Mobile No.</label>
                  <input type="number" />
                </div>
                <div className="form-group">
                  <label htmlFor="">CNIC</label>
                  <input type="number" />
                </div>
              </div>
              <div className="row-1">
                <div className="form-group">
                  <label htmlFor="">City</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Upload Documents</label>
                  <input type="text" />
                </div>
              </div> */}
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
