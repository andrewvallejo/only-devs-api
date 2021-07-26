import express from 'express';
import cors from 'cors';
import { questions } from './data/questions';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
app.locals = { 
  title: 'onlyDevs API',
  questions
}

app.get('/api/questions', (request, response) => {
  const questions = app.locals.questions;
  response.json({ questions })
})

app.get('/api/questions/:id', (request, response) => {
  const questions = app.locals.questions;
  const { id } = request.params 
  const queriedQuestion = questions.find(question => question.id === parseInt(id));
  
  !queriedQuestion
    ? response.status(404).send('This question is not found!')
    : response.status(200).json(queriedQuestion)
})

app.post('/api/questions/:id', (request, response) => {
  const { id } = request.params;
  const { answer } = request.body;
  
  !answer && response.status(422)
    .send({ error: `Expected format: { answer: <String> }. You're missing an answer` });
  
  return app.locals.questions.find(question => {
    if (question.id === parseInt(id)) {
      question.answers.push(answer);
      response.status(201).json({ answer });
    }
  });
})



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});