import { createSlice } from "@reduxjs/toolkit";

export const virtualBoxSlice = createSlice({
  name: "virtualBox",
  initialState: {
    virtualBoxes: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getVirtualBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getVirtualBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.virtualBoxes = action.payload;
    },
    getVirtualBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteVirtualBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteVirtualBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.virtualBoxes.splice(
        state.virtualBoxes.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteVirtualBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateVirtualBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateVirtualBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.virtualBoxes[
        state.virtualBoxes.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.virtualBox;
    },
    updateVirtualBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addVirtualBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addVirtualBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.virtualBoxes.push(action.payload);
    },
    addVirtualBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getVirtualBoxStart,
  getVirtualBoxSuccess,
  getVirtualBoxFailure,
  deleteVirtualBoxStart,
  deleteVirtualBoxSuccess,
  deleteVirtualBoxFailure,
  updateVirtualBoxStart,
  updateVirtualBoxSuccess,
  updateVirtualBoxFailure,
  addVirtualBoxStart,
  addVirtualBoxSuccess,
  addVirtualBoxFailure,
} = virtualBoxSlice.actions;

export default virtualBoxSlice.reducer;