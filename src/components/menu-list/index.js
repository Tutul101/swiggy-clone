import React, { useState } from "react";
import _get from "lodash/get";

import "./menu-list.scss";
import MenuItem from "../menu-item";

const MenuList = ({ menuSection }) => {
  const title = _get(menuSection, ["card", "card", "title"], "");
  const itemCards = _get(menuSection, ["card", "card", "itemCards"], []);
  const [showMenu, setShowMenu] = useState(true);

  if (itemCards.length === 0) {
    return null;
  }
  return (
    <div className="menu-list-container">
      <div className="menu-list-wrapper">
        <div className="menu-list-title">{title}</div>
        {showMenu ? (
          <div
            className="menu-list-dropup"
            onClick={() => {
              setShowMenu(false);
            }}></div>
        ) : (
          <div
            className="menu-list-dropdown"
            onClick={() => {
              setShowMenu(true);
            }}></div>
        )}
      </div>
      {itemCards.map((item, index) => {
        const info = _get(item, ["card", "info"], {});
        console.log("info", info);
        const { id, name, imageId, description, defaultPrice, price } = info;
        const itemPrice = price === undefined ? defaultPrice : price;
        return (
          <>
            {showMenu && (
              <MenuItem
                key={index}
                id={id}
                name={name}
                price={itemPrice / 100}
                description={description}
                imageId={imageId}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default MenuList;
