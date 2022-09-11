const mongoose = require("mongoose");
const TFASchema = new mongoose.Schema(
  {
    temp: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TFA", TFASchema);