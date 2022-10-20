import React from "react";
import FilterTabs from "@components/FilterTabs";
import SearchBar from "@components/SearchBar";
import "@styles/FilterBar.scss";

const FilterBar = () => {
  return (
    <div className="FilterBar">
      <SearchBar />
      <FilterTabs />
      OrderSelection
    </div>
  );
}

export default FilterBar;