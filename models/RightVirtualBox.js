const mongoose = require("mongoose");
const RightVirtualBoxSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RightVirtualBox", RightVirtualBoxSchema);
