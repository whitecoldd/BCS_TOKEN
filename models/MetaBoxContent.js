const mongoose = require("mongoose");
const MetaBoxContentSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MetaBoxContent", MetaBoxContentSchema);