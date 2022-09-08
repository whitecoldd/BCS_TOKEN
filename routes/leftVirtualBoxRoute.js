const router = require("express").Router();
const LeftVirtualBox = require("../models/LeftVirtualBox");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newLeftVirtualBox = new LeftVirtualBox(req.body);

  try {
    const savedLeftVirtualBox = await newLeftVirtualBox.save();
    res.status(200).json(savedLeftVirtualBox);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedLeftVirtualBox = await LeftVirtualBox.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLeftVirtualBox);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await LeftVirtualBox.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const art = await LeftVirtualBox.findById(req.params.id);
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
      art = await LeftVirtualBox.find().sort({ createdAt: -1 }).limit(50);
    } else {
      art = await LeftVirtualBox.find();
    }

    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
