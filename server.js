const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io")

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server);

const scores = [
  {
    id: 1,
    username: "user1",
    rank: 1,
    score: 100,
    type: "tetris",
    date_created: null,
    date_updated: null,
  },
  {
    id: 2,
    username: "user2",
    rank: 2,
    score: 90,
    type: "puyo",
    date_created: null,
    date_updated: null,
  },
  {
    id: 3,
    username: "user3",
    rank: 3,
    score: 80,
    type: "puyo",
    date_created: null,
    date_updated: null,
  },
  {
    id: 4,
    username: "user4",
    rank: 4,
    score: 70,
    type: "skribbl",
    date_created: null,
    date_updated: null,
  },
  {
    id: 5,
    username: "user5",
    rank: 5,
    score: 60,
    type: "skribbl",
    date_created: null,
    date_updated: null,
  },
];

app.get("/", (req, res) => {
  res.send(scores);
});

app.post("/", (req, res) => {
  // TODO: what validations do I need?
  const { body } = req;
  if (!body.username) {
    return res.status(400).send("Missing username");
  }

  const score = {
    id: scores.length + 1,
    username: `user${scores.length + 1}`,
    rank: scores.length + 1, // TODO how optimizing rearrange the rank on  every score add /update?
    score: body.score,
    type: "tetris",
    date_created: null,
    date_updated: null,
  };
  scores.push(score);
  res.send(scores);
});

// const port = process.env.PORT || 3002;
const port = 3002;

io.on("connection", (socket) => {
  console.log('==SOCKETID::==',socket.id);
  socket.on('hello', res=>{console.log('sressse')})
  // socket.emit('emiiting')
});

server.listen(port, () => console.log(`Running on port:: ${port}`));
