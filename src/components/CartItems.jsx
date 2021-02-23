import React from "react";

const CartItems = () => {
  return (
    <>
      <div className="cart-items">
        <div className="cart-card">
          <div className="cart-card-details">
            <h2>Zinger Burger</h2>
            <p>450</p>
          </div>
          <div className="counter">
            <i className="fa fa-trash"></i>
            <p>11</p>
            <i className="fa fa-plus-square"></i>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-card-details">
            <h2>Zinger Burger</h2>
            <p>450</p>
          </div>
          <div className="counter">
            <i className="fa fa-trash"></i>
            <p>11</p>
            <i className="fa fa-plus-square"></i>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <div className="cart-total-card">
          <h2>Subtotal</h2>
          <p>PKR 450</p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
