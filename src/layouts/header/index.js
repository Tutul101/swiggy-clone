import React from "react";

import { Link } from "react-router-dom";

import SwiggyIcon from "../../assets/icons/swiggy-icon";
import NavItem from "../../components/nav-item";
import SearchIcon from "../../assets/icons/search-icon";
import ProfileIcon from "../../assets/icons/profile-icon";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <Link to="/" className="swiggy-icon">
          <SwiggyIcon />
        </Link>
        <ul className="header-menu">
          <li>
            <Link to="search">
              <NavItem icon={SearchIcon} text="Search" />
            </Link>
          </li>
          <li>
            <Link to="sign-in">
              <NavItem icon={ProfileIcon} text="Sign In" />
            </Link>
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
