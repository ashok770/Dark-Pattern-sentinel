const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// DETECTION API
app.post("/api/detect", (req, res) => {
  const { text } = req.body;

  let patterns = [];

  const lowerText = text.toLowerCase();

  // Fake urgency
  if (
    lowerText.includes("only") ||
    lowerText.includes("left") ||
    lowerText.includes("hurry") ||
    lowerText.includes("limited")
  ) {
    patterns.push("⚠️ Fake Urgency");
  }

  // Confirmshaming
  if (lowerText.includes("i don’t care") || lowerText.includes("i dont care")) {
    patterns.push("⚠️ Confirmshaming");
  }

  res.json({ patterns });
});

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
