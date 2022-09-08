const router = require("express").Router();
const Statistics = require("../models/Statistics");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newStatistics = new Statistics(req.body);

  try {
    const savedStatistics = await newStatistics.save();
    res.status(200).json(savedStatistics);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedStatistics = await Statistics.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStatistics);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Statistics.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const art = await Statistics.findById(req.params.id);
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
      art = await Statistics.find().sort({ createdAt: -1 }).limit(50);
    } else {
      art = await Statistics.find();
    }

    res.status(200).json(art);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
