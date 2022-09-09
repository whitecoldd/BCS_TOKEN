import { createSlice } from "@reduxjs/toolkit";

export const buyFieldSlice = createSlice({
  name: "buyField",
  initialState: {
    buyFields: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getBuyFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBuyFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.buyFields = action.payload;
    },
    getBuyFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteBuyFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteBuyFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.buyFields.splice(
        state.buyFields.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteBuyFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateBuyFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBuyFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.buyFields[
        state.buyFields.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.buyField;
    },
    updateBuyFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addBuyFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addBuyFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.buyFields.push(action.payload);
    },
    addBuyFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBuyFieldStart,
  getBuyFieldSuccess,
  getBuyFieldFailure,
  deleteBuyFieldStart,
  deleteBuyFieldSuccess,
  deleteBuyFieldFailure,
  updateBuyFieldStart,
  updateBuyFieldSuccess,
  updateBuyFieldFailure,
  addBuyFieldStart,
  addBuyFieldSuccess,
  addBuyFieldFailure,
} = buyFieldSlice.actions;

export default buyFieldSlice.reducer;