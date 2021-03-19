import React, { useState, useEffect } from "react";
import axios from "axios";

const AddCategory = () => {
  const [cat, setCat] = useState({
    category: "",
  });
  const setCategory = (e) => {
    // setMenu({ ...menu, category: e.target.value });
    setCat({ category: e.target.value });
  };
  const categorySubmit = (e) => {
    e.preventDefault();
    const displayCategory = {
      category: cat.category,
    };

    console.log(displayCategory);
    // window.location = "/";
    axios
      .post("http://localhost:5000/category/add", displayCategory)
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <div className="category-section">
        <h1>Add categ</h1>
        <form onSubmit={categorySubmit}>
          <label htmlFor="">Categories:</label>
          <input
            id="category"
            type="text"
            VALUE={cat.category}
            onChange={setCategory}
          />
          <input type="submit" VALUE="Submit" />
        </form>
      </div>
    </>
  );
};

export default AddCategory;
