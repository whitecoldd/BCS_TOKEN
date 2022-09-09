import { createSlice } from "@reduxjs/toolkit";

export const nftSlice = createSlice({
  name: "nft",
  initialState: {
    nfts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getNFTStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.nfts = action.payload;
    },
    getNFTFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteNFTStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.nfts.splice(
        state.nfts.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteNFTFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateNFTStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.nfts[
        state.nfts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.nft;
    },
    updateNFTFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addNFTStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addNFTSuccess: (state, action) => {
      state.isFetching = false;
      state.nfts.push(action.payload);
    },
    addNFTFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getNFTStart,
  getNFTSuccess,
  getNFTFailure,
  deleteNFTStart,
  deleteNFTSuccess,
  deleteNFTFailure,
  updateNFTStart,
  updateNFTSuccess,
  updateNFTFailure,
  addNFTStart,
  addNFTSuccess,
  addNFTFailure,
} = nftSlice.actions;

export default nftSlice.reducer;