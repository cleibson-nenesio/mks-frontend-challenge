import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDataTypes } from "../../../types/product-data";

interface ICartState {
  products: ProductDataTypes[];
  totalAmount: number;
  isOpen: boolean;
}

const initialState: ICartState = {
  products: [],
  totalAmount: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProduct);
      }
    },
    removeProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.products[itemIndex].cartQuantity === 1) return;

        state.products[itemIndex].cartQuantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      const newProductsCart = state.products.filter(
        (cartProduct) => cartProduct.id !== action.payload.id
      );

      state.products = newProductsCart;
    },
    getTotal: (state) => {
      let { total } = state.products.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const itensTotal = price * cartQuantity;

          cartTotal.total += itensTotal;

          return cartTotal;
        },
        { total: 0 }
      );

      state.totalAmount = total;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  deleteProduct,
  getTotal,
  openCart,
  closeCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
