const express = require("express");
const app = express();
const port = 2410;

app.listen(port, () => {
  console.log(`Port listening to ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
