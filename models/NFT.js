const mongoose = require("mongoose");
const NFTSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    header1: { type: String, required: true },
    header1p: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: String, required: true },
    arr: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NFT", NFTSchema);