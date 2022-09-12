import { createSlice } from "@reduxjs/toolkit";

export const contractSlice = createSlice({
  name: "contract",
  initialState: {
    contracts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getContractStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getContractSuccess: (state, action) => {
      state.isFetching = false;
      state.contracts = action.payload;
    },
    getContractFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteContractStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteContractSuccess: (state, action) => {
      state.isFetching = false;
      state.contracts.splice(
        state.contracts.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteContractFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateContractStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateContractSuccess: (state, action) => {
      state.isFetching = false;
      state.contracts[
        state.contracts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.contract;
    },
    updateContractFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addContractStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addContractSuccess: (state, action) => {
      state.isFetching = false;
      state.contracts.push(action.payload);
    },
    addContractFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getContractStart,
  getContractSuccess,
  getContractFailure,
  deleteContractStart,
  deleteContractSuccess,
  deleteContractFailure,
  updateContractStart,
  updateContractSuccess,
  updateContractFailure,
  addContractStart,
  addContractSuccess,
  addContractFailure,
} = contractSlice.actions;

export default contractSlice.reducer;