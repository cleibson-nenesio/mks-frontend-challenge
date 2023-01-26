import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart-slice";
import { productsFetch, productsReducer } from "./features/products/products-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetch())

export type RootState = ReturnType<typeof store.getState>;
