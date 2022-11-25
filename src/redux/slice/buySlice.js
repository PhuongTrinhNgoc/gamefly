import { createSlice } from "@reduxjs/toolkit";
import * as React from "react";

const initialState = {
  buy: [],
};
const buySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    buyItem: (state = initialState, action) => {
      console.log(state.buy, action);
      const itemFind = state.buy.find((p) => p._id === action.payload._id);

      if (!itemFind) {
        return { buy: [action.payload] };
      } else return state;
    },
  },
});
export const { buyItem } = buySlice.actions;
export default buySlice.reducer;
