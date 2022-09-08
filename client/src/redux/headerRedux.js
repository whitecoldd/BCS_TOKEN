import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    headers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHeaderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHeaderSuccess: (state, action) => {
      state.isFetching = false;
      state.headers = action.payload;
    },
    getHeaderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHeaderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHeaderSuccess: (state, action) => {
      state.isFetching = false;
      state.headers.splice(
        state.headers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHeaderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateHeaderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateHeaderSuccess: (state, action) => {
      state.isFetching = false;
      state.headers[
        state.headers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.header;
    },
    updateHeaderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addHeaderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHeaderSuccess: (state, action) => {
      state.isFetching = false;
      state.headers.push(action.payload);
    },
    addHeaderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getHeaderStart,
  getHeaderSuccess,
  getHeaderFailure,
  deleteHeaderStart,
  deleteHeaderSuccess,
  deleteHeaderFailure,
  updateHeaderStart,
  updateHeaderSuccess,
  updateHeaderFailure,
  addHeaderStart,
  addHeaderSuccess,
  addHeaderFailure,
} = headerSlice.actions;

export default headerSlice.reducer;