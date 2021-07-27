CREATE DATABASE questions_database;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question TEXT NOT NULL
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id integer NOT NULL references questions(id),
  answer TEXT NOT NULL,
  rating integer NOT NULL,
  answer_time DATE NOT NUll
);

