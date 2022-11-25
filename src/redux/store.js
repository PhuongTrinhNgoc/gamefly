import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/producSlice";
import cartsReducer from "./slice/cartSlice";
import buysReducer from "./slice/buySlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    buys: buysReducer,
  },
});
export default store;
