const router = require("express").Router();
const TFA = require("../models/TFA");
const speakeasy = require("speakeasy");
router.post("/auth", async (req, res) => {
  try {
    const newTFA = new TFA({
      temp: speakeasy.generateSecret(),
    });
    const savedTFA = await newTFA.save();
    res.status(200).json({ id: savedTFA._id, temp: savedTFA.temp.base32});
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
