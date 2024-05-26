import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./cart-item.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { itemImage, name, quantity, totalPrice } = item;
  const addItem = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemToCart(item.id));
  };
  return (
    <div className="item-wrapper">
      <div className="item-image-wrapper">
        <img src={itemImage} alt={name} />
      </div>
      <div className="item-name">{name}</div>
      <div className="item-price-wrapper">
        <div className="control-btn decrement" onClick={removeItem}>
          -
        </div>
        <div className="quantity">{quantity}</div>
        <div className="control-btn increment" onClick={addItem}>
          +
        </div>
      </div>
      <div className="item-price">
        <span>Amount: </span>₹{Math.round(totalPrice)}
      </div>
    </div>
  );
};

export default CartItem;
