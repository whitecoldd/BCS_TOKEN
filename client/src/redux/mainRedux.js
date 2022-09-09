import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    mains: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getMainStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMainSuccess: (state, action) => {
      state.isFetching = false;
      state.mains = action.payload;
    },
    getMainFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteMainStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMainSuccess: (state, action) => {
      state.isFetching = false;
      state.mains.splice(
        state.mains.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteMainFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateMainStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMainSuccess: (state, action) => {
      state.isFetching = false;
      state.mains[
        state.mains.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.main;
    },
    updateMainFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addMainStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMainSuccess: (state, action) => {
      state.isFetching = false;
      state.mains.push(action.payload);
    },
    addMainFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMainStart,
  getMainSuccess,
  getMainFailure,
  deleteMainStart,
  deleteMainSuccess,
  deleteMainFailure,
  updateMainStart,
  updateMainSuccess,
  updateMainFailure,
  addMainStart,
  addMainSuccess,
  addMainFailure,
} = mainSlice.actions;

export default mainSlice.reducer;