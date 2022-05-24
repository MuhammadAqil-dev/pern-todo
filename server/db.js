const Pool = require("pg").Pool;

const pool = new Pool({
  user: "aqil1",
  password: "aqil1234",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
