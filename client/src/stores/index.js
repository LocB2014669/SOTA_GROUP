import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReduce";
import { cartReducer } from "./reducers/cartReduce";

const userInfoFromStorage = localStorage.getItem("account");
const parsedUserInfo = userInfoFromStorage
  ? JSON.parse(userInfoFromStorage)
  : null;

const cartInfoFromStorage = localStorage.getItem("cart");
const parsedCartInfo = cartInfoFromStorage
  ? JSON.parse(cartInfoFromStorage)
  : null;

const initialState = {
  user: { userInfo: parsedUserInfo },
  cart: { cartInfo: parsedCartInfo },
};

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;
