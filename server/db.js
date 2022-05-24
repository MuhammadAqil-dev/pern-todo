const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "aqil1",
//   password: "aqil1234",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo"
// });
const pool = new Pool({
  user: "aqil",
  password: "aqil12345678",
  host: "my-db-instance.cwk9vigvhmvi.us-east-1.rds.amazonaws.com",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
