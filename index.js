const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Deployed Successfully" });
});

app.listen(5173, () => console.log("server is running on port 88888"));
