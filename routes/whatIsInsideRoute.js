const router = require("express").Router();
const WhatIsInside = require("../models/WhatIsInside");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newWhatIsInside = new WhatIsInside(req.body);

  try {
    const savedWhatIsInside = await newWhatIsInside.save();
    res.status(200).json(savedWhatIsInside);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedWhatIsInside = await WhatIsInside.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWhatIsInside);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await WhatIsInside.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const art = await WhatIsInside.findById(req.params.id);
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
      art = await WhatIsInside.find().sort({ createdAt: -1 }).limit(50);
    } else {
      art = await WhatIsInside.find();
    }

    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
