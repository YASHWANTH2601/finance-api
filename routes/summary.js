const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Get summary of transactions
router.get("/", async (req, res) => {
  try {
    // Aggregate transactions by type and calculate total amounts
    const summary = await Transaction.aggregate([
      {
        $group: {
          _id: "$type", // Group by transaction type ('income' or 'expense')
          totalAmount: { $sum: "$amount" }, // Calculate the total amount for each type
        },
      },
    ]);

    // Initialize income, expense
    let totalIncome = 0;
    let totalExpense = 0;

    // Iterate over the summary to assign totals for income and expense
    summary.forEach((item) => {
      if (item._id === "income") {
        totalIncome = item.totalAmount;
      } else if (item._id === "expense") {
        totalExpense = item.totalAmount;
      }
    });

    const balance = totalIncome - totalExpense;

    // Send the result back as JSON
    res.json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
