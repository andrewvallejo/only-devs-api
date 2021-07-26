const Pool = require('pg').Pool

export const pool = new Pool({
  user: "postgres",
  password: "password",
  database: "questions_database",
  host: "localhost",
  port: 5432,
})