import React from "react";
import "@styles/SearchBar.scss"


const SearchBar = () => {
  return (
    <div className="SearchBar">
      <i className="SearchBar__icon"></i>
      <input className="SearchBar__input" type="search" placeholder="Search product" />
    </div>
  )
}

export default SearchBar;