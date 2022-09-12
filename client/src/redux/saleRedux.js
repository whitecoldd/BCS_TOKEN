import { createSlice } from "@reduxjs/toolkit";

export const saleSlice = createSlice({
  name: "sale",
  initialState: {
    sales: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSaleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSaleSuccess: (state, action) => {
      state.isFetching = false;
      state.sales = action.payload;
    },
    getSaleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSaleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSaleSuccess: (state, action) => {
      state.isFetching = false;
      state.sales.splice(
        state.sales.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSaleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSaleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSaleSuccess: (state, action) => {
      state.isFetching = false;
      state.sales[
        state.sales.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.sale;
    },
    updateSaleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addSaleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSaleSuccess: (state, action) => {
      state.isFetching = false;
      state.sales.push(action.payload);
    },
    addSaleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSaleStart,
  getSaleSuccess,
  getSaleFailure,
  deleteSaleStart,
  deleteSaleSuccess,
  deleteSaleFailure,
  updateSaleStart,
  updateSaleSuccess,
  updateSaleFailure,
  addSaleStart,
  addSaleSuccess,
  addSaleFailure,
} = saleSlice.actions;

export default saleSlice.reducer;