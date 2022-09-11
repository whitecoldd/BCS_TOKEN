import { createSlice } from "@reduxjs/toolkit";

export const boxSlice = createSlice({
  name: "box",
  initialState: {
    boxes: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.boxs = action.payload;
    },
    getBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.boxes.splice(
        state.boxes.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.boxes[
        state.boxes.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.box;
    },
    updateBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addBoxStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addBoxSuccess: (state, action) => {
      state.isFetching = false;
      state.boxes.push(action.payload);
    },
    addBoxFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBoxStart,
  getBoxSuccess,
  getBoxFailure,
  deleteBoxStart,
  deleteBoxSuccess,
  deleteBoxFailure,
  updateBoxStart,
  updateBoxSuccess,
  updateBoxFailure,
  addBoxStart,
  addBoxSuccess,
  addBoxFailure,
} = boxSlice.actions;

export default boxSlice.reducer;