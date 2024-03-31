import React from "react";
import RatingIcon from "../../assets/icons/rating-icon";

import "./menu-item.scss";
const MenuItem = () => {
  const BaseImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div className="menu-item-wrapper">
      <div className="menu-item-info">
        <div className="menu-item-name">
          <div className="dish-name">Garlic Breadsticks</div>
          <div className="dish-price">₹109</div>
        </div>
        {/* <div className="menu-item-rating-wrapper">
           <RatingIcon /> 
          4.5(331)
        </div> */}
        <div className="menu-item-description">
          Baked to perfection. Your perfect pizza partner! Tastes best with dip
        </div>
      </div>

      <div className="menu-item-image-wrapper">
        <img src={`${BaseImage}77b13d58799f70f670be31e6fe53374e`} />
        <button type="button" className="add-btn">
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
