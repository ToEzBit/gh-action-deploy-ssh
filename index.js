const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(8888, () => console.log("server is running on port 88888"));
