const mongoose = require("mongoose");
const StatisticsSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Statistics", StatisticsSchema);
