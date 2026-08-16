import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [{ id: 1, name: "dell" }],
  userId: null,
  paymentDetails: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      console.log(state, "===action");
      state.cartItems = [];
    },
    addCart: function (state, action) {
      state.cartItems.push(action.payload);
    },
    removeCart: function (state, action) {
      console.log("===fun runnignx", action.payload);
      state.cartItems = state.cartItems.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { clearCart, addCart, removeCart } = cartSlice.actions;
