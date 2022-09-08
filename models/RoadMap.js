const mongoose = require("mongoose");
const RoadMapSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text1: { type: String, required: true },
    text2: { type: String, required: true },
    text3: { type: String, required: true },
    text4: { type: String, required: true },
    text5: { type: String, required: true },
    text6: { type: String, required: true },
    text7: { type: String, required: true },
    text8: { type: String, required: true },
    text9: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoadMap", RoadMapSchema);
