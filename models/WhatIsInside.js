const mongoose = require("mongoose");
const WhatIsInsideSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    text: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhatIsInside", WhatIsInsideSchema);
