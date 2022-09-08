const mongoose = require("mongoose");
const PlanSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", PlanSchema);