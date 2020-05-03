const express = require("express");
const router = express.Router();

const Score = require("../models/Score");

router.get("/", (req, res) => {
  res.send("Posts get hit");
});

router.post("/", (req, res) => {
  const score = new Score({
    username: req.body.username,
    score: req.body.score,
    type: req.body.type,
  });

  score
    .save() // returns Promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
