import React from "react";
import '@styles/Header.scss';
import MobileMenuButton from "@components/MobileMenuButton";
import ShoppingCartButton from "@components/ShoppingCartButton";
import FilterTabs from "@components/FilterTabs";
import logo from "@logos/logo_yard_sale.svg";
import arrow from "@icons/flechita.svg";

const Header = () => {
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
        <div className="account">
          <a href="#">camilayokoo@gmail.com</a>
          <img src={arrow} alt="flecha" />
        </div>
        <ShoppingCartButton />
      </div>
    </nav>
  );
}

export default Header;