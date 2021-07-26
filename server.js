import express from 'express';
import cors from 'cors';
import { questions } from './data/questions';
import { pool } from './database/database';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'));
app.set('port', process.env.PORT || 3001);
app.locals = { 
  title: 'onlyDevs API',
  questions
}

app.get('/questions', (request, response) => {
  pool.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      throw error
    } 
    response.status(200).json(results)
  })
})


//   response.json({ questions })
// })

// app.get('/questions/:id', (request, response) => {
//   const questions = app.locals.questions;
//   const { id } = request.params 
//   const queriedQuestion = questions.find(question => question.id === parseInt(id));
  
//   !queriedQuestion
//     ? response.status(404).send('This question is not found!')
//     : response.status(200).json(queriedQuestion)
// })

app.post('/questions', async (request, response) => { 
  try
  {
  const { question } = request.body;
  const newQuestion = await pool.query(
    "INSERT INTO questions(question) VALUES ($1)",
    [question]
      ).then(response.status(200).json(question))
} catch (error) {
    console.error(error.message)
  }
})




app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});