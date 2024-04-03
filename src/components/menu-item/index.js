import React from "react";
import RatingIcon from "../../assets/icons/rating-icon";

import "./menu-item.scss";
const MenuItem = ({ name, price, description, imageId }) => {
  const BaseImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div className="menu-item-wrapper">
      <div className="menu-item-info">
        <div className="menu-item-name">
          <div className="dish-name">{name}</div>
          <div className="dish-price">₹{price}</div>
        </div>

        <div className="menu-item-description">{description}</div>
      </div>

      <div className="menu-item-image-wrapper">
        <img src={`${BaseImage}${imageId}`} />
        <button type="button" className="add-btn">
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
