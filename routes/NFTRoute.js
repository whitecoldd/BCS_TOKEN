const router = require("express").Router();
const NFT = require("../models/NFT");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newNFT = new NFT(req.body);

  try {
    const savedNFT = await newNFT.save();
    res.status(200).json(savedNFT);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedNFT = await NFT.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNFT);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await NFT.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const art = await NFT.findById(req.params.id);
    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find", async (req, res) => {
  const qNew = req.query.new;

  try {
    let art;

    if (qNew) {
      art = await NFT.find().sort({ createdAt: -1 }).limit(50);
    } else {
      art = await NFT.find();
    }

    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
