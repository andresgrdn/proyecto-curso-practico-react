import React from "react";
import "@styles/MobileMenuButton.scss";
import hamIcon from "@icons/icon_menu.svg";

const MobileMenuButton = () => {
  return (
    <a href="#" className="MobileMenuButton">
      <img src={hamIcon} alt="Menu" />
    </a>
  );
}

export default MobileMenuButton;