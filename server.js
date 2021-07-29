const express = require("express")
const cors = require("cors");
const {Pool} = require('pg')

const pool = new Pool({
  connectionString: "postgres://afuxtawmyieyjo:13bb8d5ece25a9242c5ca5f55001027d17f329cfd3a91cecf780c5024e0239a4@ec2-3-237-55-96.compute-1.amazonaws.com:5432/d9aqkclakvsmeg",
  ssl: { rejectUnauthorized: false }
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.locals.title = "onlyDevs API"

app.get("/questions", (request, response) => {
  pool.query("SELECT * FROM questions", (error, results) => {
      if (error) {
        throw error
      }
     return response.status(200).json(results.rows);
    });
  });

app.post("/questions", (request, response) => {
  const { question } = request.body;
  pool.query("INSERT INTO questions(question) VALUES ($1)",
  [question]
  );
  return response.status(200);
});

app.get('/questions/:id', (request, response) => {
  const { id } = request.params
  pool.query(`SELECT * FROM ANSWERS WHERE question_id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
  return response.status(200).json(results.rows);
  });
});

app.post('/questions/answer', (request, response) => {
  const { question_id, answer } = request.body;
  pool.query('INSERT INTO answers(question_id, answer, rating) VALUES ($1, $2, $3)',
  [question_id, answer, 0]
  );
  return response.status(201).json("Successful post"); 
})


app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running.");
});