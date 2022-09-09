const mongoose = require("mongoose");
const PlanSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    header1: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: Array, required: true },
    text1: { type: String, required: true },
    text2: { type: String, required: true },
    text3: { type: String, required: true },
    text4: { type: String, required: true },
    text5: { type: String, required: true },
    text6: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", PlanSchema);