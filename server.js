import express, { request, response } from "express";
import cors from "cors";
import { pool } from "./database/database";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("port", process.env.PORT || 3001);
app.locals.title = "onlyDevs API"

app.get("/questions", async (request, response) => {
  try {
    await pool.query("SELECT * FROM questions", (error, results) => {
      if (error) {
        return console.error(`Query ${error.stack}`);
      }
      response.status(200).json(results.rows);
    });
  } 
  catch (error) {
    response.status(422).send("Sorry! The server is down!");
  }
});

app.post("/questions", async (request, response) => {
  try {
    const { question } = request.body;
    await pool.query("INSERT INTO questions(question) VALUES ($1)",
      [question]
    );
    return response.status(200);
  } 
  catch (error) {
    response.status(404).send(error.message); 
  }
});

app.get('/questions/:id', async (request, response) => {
  try {
    const { id } = request.params
    await pool.query(`SELECT * FROM ANSWERS WHERE question_id = ${id}`, (error, results) => {
      if (error) {
        return console.error(`Query ${error.stack}`);
      }
      response.status(200).json(results.rows);
    });
  }
  catch (error) {
    response.status(422).send("Sorry! The server is down!");
  }
});

app.post('/questions/answer', (request, response) => {
    const { question_id, answer } = request.body;
     pool.query('INSERT INTO answers(question_id, answer, rating) VALUES ($1, $2, $3)',
    [question_id, answer, 0], 
    (error, results) => {
      
      if (error) {
        return console.error(error);
      }
      response.status(201).json("Successful post");
    });  
  
})

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
});
