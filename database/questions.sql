CREATE DATABASE questions_database;

CREATE TABLE questions{
  question_id SERIAL PRIMARY KEY,
  description VARCHAR(500)
}