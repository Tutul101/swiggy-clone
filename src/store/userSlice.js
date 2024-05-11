import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserLogin(state, action) {
      state.user = action.payload;
    },
    setUserLogout(state) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
