const router = require("express").Router();
const TFA = require("../models/TFA");
const speakeasy = require("speakeasy");
router.post("/verify", async (req, res) => {
  const {tfaId, token} = await TFA.findOne({ temp: req.body});
  try {
    // Retrieve user from database
    const user = await TFA.findOne({ temp: req.body})
    const { base32: secret } = user.temp;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
    });
    if (verified) {
      // Update user data
      db.push(path, { id: tfaId, secret: user.temp });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});
module.exports = router;
