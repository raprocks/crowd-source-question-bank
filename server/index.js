const express = require("express");

const app = express();

const port = 3200;
app.get("/test", (req, res) => {
  res.json({ data: "Hello World!" });
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
