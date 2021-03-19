import React from "react";

import "../styles/FoodOrderPage.css";

// Importing Components
// import Nav from "../components/Nav";
import LoggedInNav from "./LoggedInNav";
import Cart from "./Cart";

// Importing Images
import kfcBg from "../images/KFC BG.svg";
import backArrow from "../images/Back Arrow.svg";
import hiveBackdrop from "../images/Hive Backdrop.svg";

// Importing other packages
import { Link } from "react-router-dom";

// Static data

const restaurants = [
  {
    id: 1,
    name: "Kaybees",
    distance: 10,
    time: 50,
  },
  {
    id: 2,
    name: "OPTP",
    distance: 5,
    time: 7,
  },
  {
    id: 3,
    name: "Mcdonalds",
    distance: 30,
    time: 17,
  },
  {
    id: 4,
    name: "China Grill",
    distance: 1,
    time: 5,
  },
  {
    id: 5,
    name: "Hardees",
    distance: 19,
    time: 47,
  },
  {
    id: 6,
    name: "Kababjees",
    distance: 1.9,
    time: 34,
  },
];

const showCart = () => {
  var element = document.getElementById("cart");
  element.classList.remove("cart-hide");
  element.classList.add("cart");
};

const FoodOrderPage = () => {
  return (
    <>
      <LoggedInNav showCart={showCart} linkTo="/food-order/cart" />
      <div className="main-section">
        <img
          src={hiveBackdrop}
          className="hive-backdrop"
          alt=""
          width="450px"
        />
        <div className="title">
          <h1>Food Ordering</h1>
          <p>
            Here you can advance order food for dine-in <br /> or takeaway and
            also reserve tables
          </p>
        </div>
        <div className="search-section">
          <p>
            You can browse through restaurants near <br /> you or search
          </p>
          <form className="search-form" action="">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="search-results">
          <div className="grid">
            {/* Cards Start */}
            {restaurants.map((restaurant) => (
              <div className="card">
                <div className="card-image">
                  <img src={kfcBg} alt="" width="100%" />
                  <h1>{restaurant.name}</h1>
                </div>
                <div className="card-info">
                  <div className="card-left">
                    <div className="card-info-dist">
                      <i className="fa fa-road"></i>
                      <p>{restaurant.distance} Km</p>
                    </div>
                    <div className="card-info-time">
                      <i className="fa fa-clock-o"></i>
                      <p>{restaurant.time} mins*</p>
                    </div>
                  </div>
                  <div className="forward-arrow">
                    <Link to="/menu">
                      <img src={backArrow} alt="" width="30px" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* Cards End */}
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-text">
            <p>* Food preparation times can and may vary</p>
          </div>
        </div>
      </div>
      <Cart linkTo="/food-order" />
    </>
  );
};

export default FoodOrderPage;
