const mongoose = require("mongoose");
const SaleSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    timer_text: { type: String, required: true },
    contract1: { type: String, required: true },
    contract2: { type: String, required: true },
    tokens: { type: String, required: true },
    claim: { type: String, required: true },
    weekly_claim:{ type: String, required: true },
    weekly_claim_response:{ type: String, required: true },
    instructions:{ type: String, required: true },
    instructions_list:{ type: Array, required: true },
    note: { type: String, required: true },
    btn1: { type: String, required: true },
    btn2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", SaleSchema);