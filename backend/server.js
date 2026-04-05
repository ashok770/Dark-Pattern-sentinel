const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
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
  if (lowerText.includes("only") && lowerText.includes("left")) {
    patterns.push("⚠️ Fake Urgency");
  }

  // Confirmshaming
  if (lowerText.includes("i don’t care") || lowerText.includes("i dont care")) {
    patterns.push("⚠️ Confirmshaming");
  }

  res.json({ patterns });
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
