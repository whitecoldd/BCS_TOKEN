const router = require("express").Router();
const Contract = require("../models/Contract");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newContract = new Contract(req.body);

  try {
    const savedContract = await newContract.save();
    res.status(200).json(savedContract);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedContract = await Contract.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedContract);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Contract.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const contr = await Contract.findById(req.params.id);
    res.status(200).json(contr);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find", async (req, res) => {
  const qNew = req.query.new;

  try {
    let contr;

    if (qNew) {
      contr = await Contract.find().sort({ createdAt: -1 }).limit(50);
    } else {
      contr = await Contract.find();
    }

    res.status(200).json(contr);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
