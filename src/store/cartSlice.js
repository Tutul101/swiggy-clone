import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((data) => data.id === item.id);
      state.totalQuantity = state.totalQuantity + 1;
      if (!existingItem) {
        state.items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          totalPrice: item.price,
          itemImage: item.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
      console.log("Cart Items", state.items);
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
