import React from "react";
import "@styles/FilterTabs.scss";

const FilterTabs = () => {
  return (
    <ul className="FilterTabs">
      <li><a href="/">All</a></li>
      <li><a href="/clothes">Clothes</a></li>
      <li><a href="/electronics">Electronics</a></li>
      <li><a href="/furniture">Furniture</a></li>
      <li><a href="/toys">Toys</a></li>
      <li><a href="/others">Others</a></li>
    </ul>
  )
}

export default FilterTabs;