
# onlyDevs API

This API was built with Express for the project [onlyDevs](https://github.com/andrewvallejo/only-devs). It includes a backend made with PostgreSQL that contains 50 front-end developer interview questions that also holds user submitted answers. 

## Badges 

<p style="text-align: center;"> 
  <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
  <img alt="Express Badge" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?logo=babel&logoColor=000&style=flat-square" alt="Babel Badge">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat-square" alt="Nodemon Badge">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat-square" alt="PostgreSQL Badge">
</p>


## Features

- GET front-end developer interview questions.
- POST user submitted answers.
- GET user submitted answers for specific questions.
- POST user answers to either upvote or downvote

## Installation

Clone the repository and install dependencies

```szh 
git clone git@github.com:andrewvallejo/only-devs-api.git
cd only-devs-api
npm install 
```

## Deployment

To deploy, `cd` into the project folder and run

```zsh
npm start
``` 

## API Documentation

| Purpose   | URL      | Verb   | Request Body |
| :-------- | :------- | :------- | :------------ |
| Get all questions | /questions | GET | All questions each with <br/>`{"id": <Integer>, "question": <String>, "answers": <Array>}` |
| Get specific question | /questions/:id | GET |   `{"id": <Integer>, "question": <String>, "answers": <Array>}` |
| Submit an answer to question | /question/:id | POST |  `{"answer": <String>}` |
| Add score from answer | /questions/answer/vote | POST | `{"question_id": <Integer>,"answer_id": <Integer>, "vote": "upvote"}` |
| Remove score from answer | /questions/answer/vote | POST | `{"question_id": <Integer>,"answer_id": <Integer>, "vote": "downvote"}` |


## Authors

- [@Shayan Golafshani](https://github.com/shayan-golafshani)
- [@Andrew Vallejo](https://github.com/andrewvallejo) 
- [@Rachael Carroll](https://github.com/rachaelcarroll)
