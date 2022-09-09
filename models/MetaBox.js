const mongoose = require("mongoose");
const MetaBoxSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: String, required: true },
    boxheader1: { type: String, required: true },
    boxheader2: { type: String, required: true },
    boxheader3: { type: String, required: true },
    boxtext1: { type: String, required: true },
    boxtext2: { type: String, required: true },
    boxtext3: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MetaBox", MetaBoxSchema);