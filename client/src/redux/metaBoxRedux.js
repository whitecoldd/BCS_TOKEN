import { createSlice } from "@reduxjs/toolkit";

export const metaBoxSlice = createSlice({
  name: "metaBox",
  initialState: {
    metaBoxes: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getMetaBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMetaBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.metaBoxes = action.payload;
    },
    getMetaBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteMetaBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMetaBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.metaBoxes.splice(
        state.metaBoxes.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteMetaBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateMetaBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMetaBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.metaBoxes[
        state.metaBoxes.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.metaBox;
    },
    updateMetaBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addMetaBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMetaBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.metaBoxes.push(action.payload);
    },
    addMetaBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMetaBoxStart,
  getMetaBoxSuccess,
  getMetaBoxFailure,
  deleteMetaBoxStart,
  deleteMetaBoxSuccess,
  deleteMetaBoxFailure,
  updateMetaBoxStart,
  updateMetaBoxSuccess,
  updateMetaBoxFailure,
  addMetaBoxStart,
  addMetaBoxSuccess,
  addMetaBoxFailure,
} = metaBoxSlice.actions;

export default metaBoxSlice.reducer;