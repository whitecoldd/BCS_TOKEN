const mongoose = require("mongoose");
const BuyFieldSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    btn1: { type: String, required: true },
    btn2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BuyField", BuyFieldSchema);