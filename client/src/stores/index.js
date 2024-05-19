import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReduce";
import { cartReducer } from "./reducers/cartReduce";

const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;
const cartInfoFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
  cart: { cartInfo: cartInfoFromStorage },
};
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;
