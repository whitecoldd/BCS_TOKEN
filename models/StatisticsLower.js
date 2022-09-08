const mongoose = require("mongoose");
const StatisticsLowerSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StatisticsLower", StatisticsLowerSchema);
