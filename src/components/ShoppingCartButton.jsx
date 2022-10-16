import React from "react";
import "@styles/ShoppingCartButton.scss";
import shoppingCartIcon from "@icons/icon_shopping_cart.svg";
import shoppingCartNotificationIcon from "@icons/icon_shopping_cart_notification.svg";

const ShoppingCartButton = () => {
  return (
    <>
      <div className="ShoppingCartButton no-notification">
        <img src={shoppingCartIcon} alt="Shopping cart" />
      </div>

      <div className="ShoppingCartButton notification">
        <img src={shoppingCartNotificationIcon} alt="Shopping cart notification" />
      </div>
    </>
  );
}

export default ShoppingCartButton;