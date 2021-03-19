import React from "react";

// Importing other packages
import { Link } from "react-router-dom";

// Importing components
import CartItems from "./CartItems";

const hideCart = () => {
  var element = document.getElementById("cart");
  element.classList.add("cart-hide");
};

const Cart = ({ linkTo }) => {
  return (
    <>
      <div id="cart" className="cart-hide">
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <button className="close-btn">
            <i className="fa fa-times" onClick={hideCart}></i>
          </button>
        </Link>
        <h1>Cart</h1>
        <CartItems />

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="checkout-button">
            <button className="button-style card-button checkout-btn">
              Checkout
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
