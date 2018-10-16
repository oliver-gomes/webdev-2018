const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {
  res.send("signing");
});
app.listen(3000, () => {
  console.log("app is running");
});
