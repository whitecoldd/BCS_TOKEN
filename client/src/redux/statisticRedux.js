import { createSlice } from "@reduxjs/toolkit";

export const statisticSlice = createSlice({
  name: "statistic",
  initialState: {
    statistics: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getStatisticStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getStatisticSuccess: (state, action) => {
      state.isFetching = false;
      state.statistics = action.payload;
    },
    getStatisticFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteStatisticStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteStatisticSuccess: (state, action) => {
      state.isFetching = false;
      state.statistics.splice(
        state.statistics.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteStatisticFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateStatisticStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateStatisticSuccess: (state, action) => {
      state.isFetching = false;
      state.statistics[
        state.statistics.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.statistic;
    },
    updateStatisticFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addStatisticStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addStatisticSuccess: (state, action) => {
      state.isFetching = false;
      state.statistics.push(action.payload);
    },
    addStatisticFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getStatisticStart,
  getStatisticSuccess,
  getStatisticFailure,
  deleteStatisticStart,
  deleteStatisticSuccess,
  deleteStatisticFailure,
  updateStatisticStart,
  updateStatisticSuccess,
  updateStatisticFailure,
  addStatisticStart,
  addStatisticSuccess,
  addStatisticFailure,
} = statisticSlice.actions;

export default statisticSlice.reducer;