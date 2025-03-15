const express = require("express");
const path = require("path");
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
