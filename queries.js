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

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

const getScores = (request, response) => {
  client.query("SELECT * from scores", (error, results) => {
    console.log('uh',error,results)
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    client.end();
  });
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
