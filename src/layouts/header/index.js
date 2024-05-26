import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import SwiggyIcon from "../../assets/icons/swiggy-icon";
import NavItem from "../../components/nav-item";
import SearchIcon from "../../assets/icons/search-icon";
import ProfileIcon from "../../assets/icons/profile-icon";

import "./header.scss";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(userActions.setUserLogout());
  };
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
            {user !== null ? (
              <span className="sign-out" onClick={handleSignOut}>
                Sign Out
              </span>
            ) : (
              <Link to="sign-in">
                <NavItem icon={ProfileIcon} text="Sign In" />
              </Link>
            )}
          </li>
          <li style={{ display: "flex" }}>
            <div className="cart-wrapper">
              <Link to="cart">
                <p>
                  Cart <span>({cart.totalQuantity})</span>
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
