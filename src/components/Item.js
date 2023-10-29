import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)
  const addClass = isAdded ? "in-cart" : ""

  return (
    <li className={addClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? "remove" : "add"} onClick={() => setIsAdded(!isAdded)}>{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
