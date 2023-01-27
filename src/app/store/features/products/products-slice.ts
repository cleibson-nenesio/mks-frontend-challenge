import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductDataTypes } from "../../../types/product-data";

interface IProductStates {
    data: ProductDataTypes[],
    status: null | string,
    isLoading: boolean,
}

const initialState: IProductStates = {
  data: [],
  status: null,
  isLoading: true
};

const baseURI = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      `${baseURI}products?page=1&rows=10&sortBy=id&orderBy=ASC`
    );

    return await response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state) => {
      state.status = "pending";
    }),
      builder.addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.products;
        state.isLoading = false
      }),
      builder.addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
        state.isLoading = false
      });
  },
});

export const productsReducer = productsSlice.reducer;
