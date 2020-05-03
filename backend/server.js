const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();
// app.use(express.urlencoded());
app.use(cors());

const port = process.env.PORT || 5000;
const scoreRoutes = require("./routes/scoresRoutes");

// Middleware
app.use(express.json());

app.use("/scores", scoreRoutes);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);
app.listen(port, () => console.log(`Running on port:: ${port}`));
