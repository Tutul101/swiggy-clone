import React from "react";
import SwiggyIcon from "../../assets/icons/swiggy-icon";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="swiggy-icon">
          <SwiggyIcon />
        </div>
        <ul className="header-menu">
          <li>Option1</li>
          <li>Option2</li>
          <li>Option3</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
