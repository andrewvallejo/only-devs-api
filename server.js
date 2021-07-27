import express from "express";
import cors from "cors";
import { questions } from "./data/questions";
import { pool } from "./database/database";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("port", process.env.PORT || 3001);
app.locals = {
  title: "onlyDevs API",
  questions,
};

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



// app.get('/questions/:id', (request, response) => {
//   const questions = app.locals.questions;
//   const { id } = request.params
//   const queriedQuestion = questions.find(question => question.id === parseInt(id));

//   !queriedQuestion
//     ? response.status(404).send('This question is not found!')
//     : response.status(200).json(queriedQuestion)
// })

// Answers

app.listen(app.get("port"), () => {
  console.log(
    `${
      app.locals.title
    } is running on http://localhost:${app.get(
      "port"
    )}.`
  );
});
