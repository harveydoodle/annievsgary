const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("get hit");
});

app.post("/", (req, res) => {
  res.send("post hit");
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Running on port:: ${port}`));
