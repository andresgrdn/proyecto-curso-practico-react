import React from "react";
import "@styles/DesktopMenu.scss";

const DesktopMenu = () => {
  return (
    <div class="DesktopMenu">
      <ul>
        <li><a href="/my-orders">My orders</a></li>
        <li><a href="/my-account">My account</a></li>
        <li><a href="/sign-out">Sign out</a></li>
      </ul>
    </div>
  )
}

export default DesktopMenu;