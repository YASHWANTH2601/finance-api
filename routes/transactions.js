const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Add a new transaction
router.post("/", async (req, res) => {
  try {
    const { type, category, amount, description } = req.body;
    const transaction = new Transaction({
      type,
      category,
      amount,
      description,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get transaction by ID
router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update transaction by ID
router.put("/:id", async (req, res) => {
  try {
    const { type, category, amount, description } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { type, category, amount, description },
      { new: true }
    );
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete transaction by ID
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
