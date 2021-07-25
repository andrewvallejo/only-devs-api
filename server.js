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

app.get('/api/v1/questions', (request, response) => {
  const questions = app.locals.questions;
  response.json({ questions })
})





app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});