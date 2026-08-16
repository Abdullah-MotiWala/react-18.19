import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    manual: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterReducer = counter.reducer;
export const { increment, decrement, manual } = counter.actions;
