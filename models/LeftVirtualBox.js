const mongoose = require("mongoose");
const LeftVirtualBoxSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LeftVirtualBox", LeftVirtualBoxSchema);
