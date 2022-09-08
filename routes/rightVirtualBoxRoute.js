const router = require("express").Router();
const RightVirtualBox = require("../models/RightVirtualBox");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newRightVirtualBox = new RightVirtualBox(req.body);

  try {
    const savedRightVirtualBox = await newRightVirtualBox.save();
    res.status(200).json(savedRightVirtualBox);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedRightVirtualBox = await RightVirtualBox.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRightVirtualBox);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await RightVirtualBox.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const art = await RightVirtualBox.findById(req.params.id);
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
      art = await RightVirtualBox.find().sort({ createdAt: -1 }).limit(50);
    } else {
      art = await RightVirtualBox.find();
    }

    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
