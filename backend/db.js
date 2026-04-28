require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => {
    console.log("Banco conectado");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

module.exports = pool;
