import React from "react";

// Importing components
import CartItems from "./CartItems";
import LoggedInNav from "./LoggedInNav";

// Importing Images
import backArrow from "../images/Back Arrow.svg";

// Importing other packages
import { Link } from "react-router-dom";

const Checkout = () => {
  // var slider = document.getElementById("myRange");
  // var output = document.getElementById("demo");
  // // output.innerHTML = slider.value;

  // // Update the current slider value (each time you drag the slider handle)
  // slider.oninput = function () {
  //   output.innerHTML = this.value;
  // };
  return (
    <>
      <LoggedInNav />
      <Link to="/menu">
        <img className="checkout-back" src={backArrow} alt="" width="35px" />
      </Link>
      <div className="checkout-section">
        <div className="checkout-section-left">
          <h1>Checkout</h1>
          <form action="">
            <p>Select a payment method</p>
            <div className="radio-item">
              <input
                type="radio"
                id="credit-debit-card"
                name="payment"
                value="card"
              />
              <label htmlFor="credit-debit-card">Credit/Debit Card</label>
            </div>
            <br />
            <div className="radio-item">
              <input type="radio" id="cash" name="payment" value="cash" />
              <label htmlFor="cash">Cash</label>
            </div>
            <p>Select order options</p>
            <div className="radio-item">
              <input
                type="radio"
                id="dine-in"
                name="order-option"
                value="dine-in"
              />
              <label htmlFor="dine-in">Dine-in</label>
            </div>
            <br />
            <div className="radio-item">
              <input
                type="radio"
                id="takeaway"
                name="order-option"
                value="takeaway"
              />
              <label htmlFor="takeaway">Takeaway</label>
            </div>
            <p>
              Since you opted for dine-in, <br /> would you like to reserve a
              table?
            </p>
            <div className="radio-item">
              <input
                type="radio"
                id="reservation-yes"
                name="reservation"
                value="reservation-yes"
              />
              <label htmlFor="reservation-yes">Yes</label>
              <div className="no-of-people">
                <p>No. of people</p>
                <input type="number" name="" id="" size="1" />
                {/* <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    className="slider"
                    id="myRange"
                  />
                  <div className="slider-display">
                    <p>
                      People: <span id="demo"></span>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <br />
            <div className="radio-item">
              <input
                type="radio"
                id="reservation-no"
                name="reservation"
                value="reservation-no"
              />
              <label htmlFor="reservation-no">No</label>
            </div>
          </form>
        </div>
        <div className="checkout-section-right">
          <h1>Order Summary</h1>
          <CartItems />
        </div>
      </div>
    </>
  );
};

export default Checkout;
