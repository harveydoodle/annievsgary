const { Pool, Client } = require("pg");
const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
const pool = new Pool({
  connectionString: connectionString,
});

const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then()
  .catch((err) => console.error("connection error", err.stack));

const getScores = (request, response) => {
  client
    .query("SELECT * from scores_table")
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((e) => console.error(e.stack));
};

const createScore = (request, response) => {
  console.log("createScore hit");
};

const updateScore = () => {};

module.exports = {
  getScores,
  createScore,
  updateScore,
};
