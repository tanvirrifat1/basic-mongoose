const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// database connection
async function tailwind() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice_mongoose");
    console.log("Database connect successfully");
  } catch (err) {
    console.log(`failed to connect database`, err);
  }
}

tailwind();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
