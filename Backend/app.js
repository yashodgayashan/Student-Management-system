const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("hello");
});

app.listen(4000, () => {
  console.log("Server starts");
});
