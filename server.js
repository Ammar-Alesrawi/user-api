require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./Routes/index");

const app = express();

// 🛠️ Middleware
app.use(express.json()); // Enable JSON body parsing
app.use(morgan("dev")); // Log requests to the console
app.use(cors()); // Allow cross-origin requests

// ✅ Test route to check if the server is running
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});


// Routes
app.use(routes);

// 📌 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
