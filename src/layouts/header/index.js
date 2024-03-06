import React from "react";
import SwiggyIcon from "../../assets/icons/swiggy-icon";

import "./header.scss";
import NavItem from "../../components/nav-item";
import SearchIcon from "../../assets/icons/search-icon";
import ProfileIcon from "../../assets/icons/profile-icon";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="swiggy-icon">
          <SwiggyIcon />
        </div>
        <ul className="header-menu">
          <li>
            <NavItem icon={SearchIcon} text="Search" />
          </li>
          <li>
            <NavItem icon={ProfileIcon} text="Sign In" />
          </li>
          <li style={{ display: "flex" }}>
            <div className="cart-wrapper">
              <p>Cart</p>
              <span>(0)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
