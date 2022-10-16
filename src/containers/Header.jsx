import React, { useState } from "react";
import '@styles/Header.scss';
import MobileMenuButton from "@components/MobileMenuButton";
import ShoppingCartButton from "@components/ShoppingCartButton";
import FilterTabs from "@components/FilterTabs";
import logo from "@logos/logo_yard_sale.svg";
import arrow from "@icons/flechita.svg";
import DesktopMenu from "@components/DesktopMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <nav>
      <MobileMenuButton />

      <div className="left-side">
        <figure>
          <img src={logo} alt="logo" className="logo" />
        </figure>

        <FilterTabs />
      </div>

      <div className="right-side">
        <div className="account" onClick={handleClick}>
          <a href="#">camilayokoo@gmail.com</a>
          <img src={arrow} alt="flecha" />
        </div>
        <ShoppingCartButton />
      </div>

      {toggle && <DesktopMenu />}
    </nav>
  );
}

export default Header;