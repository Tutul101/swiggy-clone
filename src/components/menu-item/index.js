import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import RatingIcon from "../../assets/icons/rating-icon";

import "./menu-item.scss";
const MenuItem = ({ id, name, price, description, imageId }) => {
  const dispatch = useDispatch();
  const BaseImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const handleAddItemClick = () => {
    const item = {
      id: id,
      name: name,
      price: price,
      image: `${BaseImage}${imageId}`,
    };
    dispatch(cartActions.addItemToCart(item));
  };
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
        <button type="button" className="add-btn" onClick={handleAddItemClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
