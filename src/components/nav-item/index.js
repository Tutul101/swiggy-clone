import React from "react";

import "./nav-item.scss";

const NavItem = ({ icon: Icon, text }) => {
  return (
    <div className="nav-item-wrapper">
      <span className="icon-wrapper">
        <Icon />
      </span>
      <p className="item-name">{text}</p>
    </div>
  );
};

export default NavItem;
