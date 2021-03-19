import React, { useState, useEffect } from "react";
import axios from "axios";

import AddCategory from "./AddCategory";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    category: "",
    menuitem: "",
    price: null,
    categories: [],
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/category/")
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         setMenu({
  //           categories: response.data.map((categ) => categ.category),
  //           category: response.data[0].category,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/")
      .then((response) => {
        if (response.data.length > 0) {
          setMenu({
            ...menu,
            categories: response.data.map((categ) => categ.category),
            // category: response.data[0].category,
          });
        }
      })
      .catch((error) => {
        console.log("Error is" + error);
      });
  }, []);

  const setCategory = (e) => {
    // setMenu({ ...menu, category: e.target.value });
    setMenu({ ...menu, category: e.target.value });
    console.log(e.target.value);
  };
  const setMenuItem = (e) => {
    setMenu({ ...menu, menuitem: e.target.value });
  };
  const setPrice = (e) => {
    setMenu({ ...menu, price: e.target.value });
  };
  const menuSubmit = (e) => {
    e.preventDefault();
    const displayMenu = {
      ...menu,
      category: menu.category,
      menuitem: menu.menuitem,
      price: menu.price,
    };

    console.log(displayMenu);
    // window.location = "/";
    axios
      .post("http://localhost:5000/menu/add", displayMenu)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AddCategory />
      <div className="add-menu-section">
        <h1>Add Menu</h1>

        <form onSubmit={menuSubmit}>
          <label htmlFor="">Categories:</label>
          <select VALUE={menu.category} onChange={setCategory}>
            {menu.categories.map(function (singlecateg) {
              return (
                <option key={singlecateg} VALUE={singlecateg}>
                  {singlecateg}
                </option>
              );
            })}
          </select>
          {/* <input
            id="category"
            type="text"
            VALUE={menu.category}
            onChange={setCategory}
          /> */}
          <label htmlFor="">Item:</label>
          <input type="text" VALUE={menu.menuitem} onChange={setMenuItem} />
          <label htmlFor="">Price:</label>
          <input type="number" VALUE={menu.price} onChange={setPrice} />
          <input type="submit" VALUE="Submit" />
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
