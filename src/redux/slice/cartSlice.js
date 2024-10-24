import { createSlice } from "@reduxjs/toolkit";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import { Stack } from "react-bootstrap";
const initialState = {
  cart: [],
  load: false,
  buy: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {
      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      const itemFind = state.cart.find((p) => p.id === action.payload.id);

      if (!itemFind) {
        return { cart: [...state.cart, action.payload] };
      } else return state;
    },
    deleteCart: (state = initialState, action) => {
      const newListCart = state.cart;
      const objIndex = newListCart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      newListCart.splice(objIndex, 1);

      //   return { cart: [...newListCart] };
    },
    buyItem: (state = initialState, action) => {
      const itemFind = state.buy.find((p) => p.id === action.payload.id);

      if (!itemFind) {
        return { buy: [...state.cart, action.payload] };
      } else return state;
    },
  },
});

export const { addToCart, deleteCart, buyItem } = cartSlice.actions;
export default cartSlice.reducer;
