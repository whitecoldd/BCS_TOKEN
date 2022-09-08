const mongoose = require("mongoose");
const MainSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text: { type: String, required: true },
    bg: { type: String, required: true },
    btn1: { type: String, required: true },
    btn2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Main", MainSchema);