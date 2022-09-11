import { createSlice } from "@reduxjs/toolkit";

export const wiiSlice = createSlice({
  name: "wii",
  initialState: {
    wiis: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getWiiStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWiiSuccess: (state, action) => {
      state.isFetching = false;
      state.wiis = action.payload;
    },
    getWiiFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteWiiStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteWiiSuccess: (state, action) => {
      state.isFetching = false;
      state.wiis.splice(
        state.wiis.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteWiiFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateWiiStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateWiiSuccess: (state, action) => {
      state.isFetching = false;
      state.wiis[
        state.wiis.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.wii;
    },
    updateWiiFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addWiiStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addWiiSuccess: (state, action) => {
      state.isFetching = false;
      state.wiis.push(action.payload);
    },
    addWiiFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getWiiStart,
  getWiiSuccess,
  getWiiFailure,
  deleteWiiStart,
  deleteWiiSuccess,
  deleteWiiFailure,
  updateWiiStart,
  updateWiiSuccess,
  updateWiiFailure,
  addWiiStart,
  addWiiSuccess,
  addWiiFailure,
} = wiiSlice.actions;

export default wiiSlice.reducer;