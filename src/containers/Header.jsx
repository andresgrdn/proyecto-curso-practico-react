import React from "react";
import '@styles/Header.scss';
import MobileMenuButton from "@components/MobileMenuButton";
import ShoppingCartButton from "@components/ShoppingCartButton";
import FilterTabs from "@components/FilterTabs";

const Header = () => {
  return (
    <nav>
      <MobileMenuButton />

      <div className="left-side">
        <figure>
          <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
        </figure>

        <FilterTabs />
      </div>

      <div className="right-side">
        <div className="account">
          <a href="#">camilayokoo@gmail.com</a>
          <img src="./assets/icons/flechita.svg" alt="flecha" />
        </div>
        <ShoppingCartButton />
      </div>
    </nav>
  );
}

export default Header;