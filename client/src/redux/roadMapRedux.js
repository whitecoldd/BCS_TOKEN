import { createSlice } from "@reduxjs/toolkit";

export const roadMapSlice = createSlice({
  name: "roadMap",
  initialState: {
    roadMaps: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getRoadMapStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getRoadMapSuccess: (state, action) => {
      state.isFetching = false;
      state.roadMaps = action.payload;
    },
    getRoadMapFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteRoadMapStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteRoadMapSuccess: (state, action) => {
      state.isFetching = false;
      state.roadMaps.splice(
        state.roadMaps.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteRoadMapFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateRoadMapStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateRoadMapSuccess: (state, action) => {
      state.isFetching = false;
      state.roadMaps[
        state.roadMaps.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.roadMap;
    },
    updateRoadMapFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addRoadMapStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addRoadMapSuccess: (state, action) => {
      state.isFetching = false;
      state.roadMaps.push(action.payload);
    },
    addRoadMapFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getRoadMapStart,
  getRoadMapSuccess,
  getRoadMapFailure,
  deleteRoadMapStart,
  deleteRoadMapSuccess,
  deleteRoadMapFailure,
  updateRoadMapStart,
  updateRoadMapSuccess,
  updateRoadMapFailure,
  addRoadMapStart,
  addRoadMapSuccess,
  addRoadMapFailure,
} = roadMapSlice.actions;

export default roadMapSlice.reducer;