import React from "react";
import "@styles/ProductItem.scss";
import addToCartIcon from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  return (
    <section class="ProductItem">
      <img
        src="https://images.pexels.com/photos/1431117/pexels-photo-1431117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />

      <div class="description">
        <div>
          <p>$ 120,00</p>
          <p>Bike</p>
        </div>

        <figure>
          <img src={addToCartIcon} alt="" />
        </figure>
      </div>
    </section>
  )
}

export default ProductItem;