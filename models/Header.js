const mongoose = require("mongoose");
const HeaderSchema = new mongoose.Schema(
  {
    header1: { type: String, required: true },
    header2: { type: String, required: true },
    header3: { type: String, required: true },
    header4: { type: String, required: true },
    header5: { type: String, required: true },
    headerIcon: { type: String, required: true },
    btn1: { type: String, required: true },
    btn2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Header", HeaderSchema);