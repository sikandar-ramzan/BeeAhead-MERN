import React, { useState } from "react";
import axios from "axios";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    category: "",
    menuitem: "",
    price: null,
  });
  const [cat, setCat] = useState({
    category: "",
  });

  const setCategory = (e) => {
    setMenu({ ...menu, category: e.target.value });
  };
  const setMenuItem = (e) => {
    setMenu({ ...menu, menuitem: e.target.value });
  };
  const setPrice = (e) => {
    setMenu({ ...menu, price: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const displayMenu = {
      category: menu.category,
      menuitem: menu.menuitem,
      price: menu.price,
    };
    const sendCategory = {
      category: cat.category,
    };

    console.log(displayMenu);
    console.log(sendCategory);
    // window.location = "/";
    axios
      .post("http://localhost:5000/menu/add", displayMenu)
      .then((res) => console.log(res.data));
    axios
      .post("http://localhost:5000/category/add", sendCategory)
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <div className="add-menu-section">
        <h1>Add Menu</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Categories:</label>
          <input
            id="category"
            type="text"
            VALUE={menu.category}
            onChange={setCategory}
          />
          <label htmlFor="">Item:</label>
          <input type="text" VALUE={menu.menuitem} onChange={setMenuItem} />
          <label htmlFor="">Price:</label>
          <input type="number" VALUE={menu.price} onChange={setPrice} />
          <input type="submit" VALUE="Submit the data" />
        </form>
        <p>{menu.category}</p>
        <p>{menu.menuitem}</p>
        <p>{menu.price}</p>
        <p>{JSON.stringify(menu)}</p>
      </div>
    </>
  );
};

export default AddMenu;
