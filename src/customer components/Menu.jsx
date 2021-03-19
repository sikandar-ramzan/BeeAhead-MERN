import React, { useState, useEffect } from "react";

// Importing other packages
import { Link } from "react-router-dom";
import axios from "axios";

// Importing Components
// import Nav from "../components/Nav";
import LoggedInNav from "./LoggedInNav";
import Cart from "./Cart";

// Importing Images
import backArrow from "../images/Back Arrow.svg";

// const category = [
//   {
//     id: 1,
//     name: "Burgers",
//   },
//   {
//     id: 2,
//     name: "Shakes",
//   },
// ];

// const menus = [
//   {
//     id: 1,
//     category: "Burgers",
//     name: "Zinger",
//     price: 190,
//   },
//   {
//     id: 2,
//     category: "Burgers",
//     name: "Chicken",
//     price: 160,
//   },
//   {
//     id: 3,
//     category: "Burgers",
//     name: "Beef",
//     price: 120,
//   },
//   {
//     id: 4,
//     category: "Burgers",
//     name: "Double Zinger",
//     price: 410,
//   },
//   {
//     id: 5,
//     category: "Burgers",
//     name: "Double Chicken",
//     price: 110,
//   },
//   {
//     id: 6,
//     category: "Burgers",
//     name: "Club sandwich",
//     price: 100,
//   },
//   {
//     id: 7,
//     category: "Shakes",
//     name: "Vanilla",
//     price: 110,
//   },
//   {
//     id: 8,
//     category: "Shakes",
//     name: "Chocolate",
//     price: 110,
//   },
//   {
//     id: 9,
//     category: "Burgers",
//     name: "Triple Stacker",
//     price: 100,
//   },
//   {
//     id: 10,
//     category: "Shakes",
//     name: "Strawberry",
//     price: 200,
//   },
// ];

const showCart = () => {
  var element = document.getElementById("cart");
  element.classList.remove("cart-hide");
  element.classList.add("cart");
};

const Menu = ({ key }) => {
  const [menu, setMenu] = useState({ menus: [] });
  const [cat, setCat] = useState({ categ: [] });
  useEffect(() => {
    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        setMenu({ menus: response.data });
        // console.log(cat);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/category")
      .then((response) => {
        setCat({ categ: response.data });
        // console.log(cat);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <LoggedInNav showCart={showCart} linkTo="/menu/cart" />
      <div className="menu-section">
        <div className="menu-title">
          <Link to="/food-order">
            <img src={backArrow} alt="" width="35px" />
          </Link>
          <h1>KFC</h1>
          <p>Select items from the menu</p>
        </div>
        <div className="menu">
          {cat.categ.map((newcat) => (
            <div>
              <h1>{newcat.category}</h1>
              <p>{newcat.menuitem}</p>
            </div>
          ))}

          {/* {category.map((categories) => (
            <div className="menu-category">
              <h1>{categories.name}</h1>
              <div className="menu-items">
                {menus.map((menuItem) =>
                  categories.name == menuItem.category ? (
                    <div className="menu-item">
                      <div className="menu-item-desc">
                        <h2>{menuItem.name}</h2>
                        <p>PKR {menuItem.price}</p>
                      </div>
                      <i className="fa fa-plus-square"></i>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ))} */}
          {cat.categ.map((categories) => (
            <div className="menu-category">
              <h1>{categories.category}</h1>
              <div className="menu-items">
                {menu.menus.map((menuItem) =>
                  categories.category == menuItem.category ? (
                    <div className="menu-item">
                      <div className="menu-item-desc">
                        <h2>{menuItem.menuitem}</h2>
                        <p>PKR {menuItem.price}</p>
                      </div>
                      <i className="fa fa-plus-square"></i>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart linkTo="/menu" />
    </>
  );
};

export default Menu;
