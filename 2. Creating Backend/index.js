const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello From Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Chai Aur Code Login</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
