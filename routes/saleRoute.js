const router = require("express").Router();
const Sale = require("../models/Sale");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newSale = new Sale(req.body);

  try {
    const savedSale = await newSale.save();
    res.status(200).json(savedSale);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSale = await Sale.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSale);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const sal = await Sale.findById(req.params.id);
    res.status(200).json(sal);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/find", async (req, res) => {
  const qNew = req.query.new;

  try {
    let sal;

    if (qNew) {
      sal = await Sale.find().sort({ createdAt: -1 }).limit(50);
    } else {
      sal = await Sale.find();
    }

    res.status(200).json(sal);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
