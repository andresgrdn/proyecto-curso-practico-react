import React from "react";
import "@styles/OrderSelection.scss"

const OrderSelection = () => {
  return (
    <div className="OrderSelection">
      <label className="OrderSelection__label" htmlFor="order-select">Order:</label>
      <select className="OrderSelection__select" name="order" id="order-select">
        <option value="">Most recent</option>
        <option value="relevant">Relevant</option>
        <option value="lower-price">Lower price</option>
        <option value="expensive">Expensive</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  )
}

export default OrderSelection;