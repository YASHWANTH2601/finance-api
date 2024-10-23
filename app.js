const express = require("express");
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");
const summary = require("./routes/summary");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/transactions", transactions);
app.use("/summary", summary);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
