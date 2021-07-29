const express = require("express")
const cors = require("cors");
const {Pool} = require('pg')

// const pool = require('./config')

const pool = new Pool({
  connectionString: "postgres://afuxtawmyieyjo:13bb8d5ece25a9242c5ca5f55001027d17f329cfd3a91cecf780c5024e0239a4@ec2-3-237-55-96.compute-1.amazonaws.com:5432/d9aqkclakvsmeg",
  ssl: { rejectUnauthorized: false }
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.locals.title = "onlyDevs API"

app.get("/questions",  (request, response) => {
  pool.query("SELECT * FROM questions", (error, results) => {
      if (error) {
        throw error
      }
     return response.status(200).json(results.rows);
    });
  });

// app.post("/questions", async (request, response) => {
//   try {
//     const { question } = request.body;
//     await pool.query("INSERT INTO questions(question) VALUES ($1)",
//       [question]
//     );
//     return response.status(200);
//   } 
//   catch (error) {
//     return response.status(404).send(error.message); 
//   }
// });

// app.get('/questions/:id', async (request, response) => {
//   try {
//     const { id } = request.params
//     await pool.query(`SELECT * FROM ANSWERS WHERE question_id = ${id}`, (error, results) => {
//       if (error) {
//         return console.error(`Query ${error.stack}`);
//       }
//       return response.status(200).json(results.rows);
//     });
//   }
//   catch (error) {
//     return response.status(422).send("Sorry! The server is down!");
//   }
// });

// app.post('/questions/answer', (request, response) => {
//     const { question_id, answer } = request.body;
//      pool.query('INSERT INTO answers(question_id, answer, rating) VALUES ($1, $2, $3)',
//     [question_id, answer, 0], 
//     (error, results) => {
      
//       if (error) {
//         return console.error(error);
//       }
//       return response.status(201).json("Successful post");
//     });  
  
// })


app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running.");
});