import React from "react";
import FilterTabs from "@components/FilterTabs";
import "@styles/FilterBar.scss";

const FilterBar = () => {
  return (
    <div className="FilterBar">
      <h2>filters container</h2>
      SearchBar
      <FilterTabs />
      OrderSelection
    </div>
  );
}

export default FilterBar;