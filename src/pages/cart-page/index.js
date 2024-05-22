import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./cart-page.scss";
import CartItem from "../../components/cart-item";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cartAmount = cartData.items.reduce((accumulator, item) => {
      return (accumulator = accumulator + item.totalPrice);
    }, 0);
    console.log("cartAmount", cartAmount);
    setTotalAmount(cartAmount);
  }, [cartData]);

  if (cartData.items.length === 0) {
    return <h1>Your cart is empty please add items to cart</h1>;
  }

  return (
    <div className="cart-wrapper">
      {cartData.items.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}

      <div className="checkout">
        <h1>Pay ₹{totalAmount}</h1>
      </div>
    </div>
  );
};

export default Cart;
