const mongoose = require("mongoose");
const ContractSchema = new mongoose.Schema(
  {
    vesting: { type: String, required: true },
    bcs: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", ContractSchema);