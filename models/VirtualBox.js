const mongoose = require("mongoose");
const VirtualBoxSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VirtualBox", VirtualBoxSchema);