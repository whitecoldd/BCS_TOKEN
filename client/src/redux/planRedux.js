import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    plans: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.plans = action.payload;
    },
    getPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePlanSuccess: (state, action) => {
      state.isFetching = false;
      state.plans.splice(
        state.plans.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePlanSuccess: (state, action) => {
      state.isFetching = false;
      state.plans[
        state.plans.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.plan;
    },
    updatePlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.plans.push(action.payload);
    },
    addPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPlanStart,
  getPlanSuccess,
  getPlanFailure,
  deletePlanStart,
  deletePlanSuccess,
  deletePlanFailure,
  updatePlanStart,
  updatePlanSuccess,
  updatePlanFailure,
  addPlanStart,
  addPlanSuccess,
  addPlanFailure,
} = planSlice.actions;

export default planSlice.reducer;