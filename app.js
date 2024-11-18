const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hhh");
});

app.listen(port, () => {
  console.log(`lisening at http:/localhost:${port}`);
});
