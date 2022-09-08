const mongoose = require("mongoose");
const BoxSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Box", BoxSchema);