CREATE DATABASE questions_database;

CREATE TABLE questions 
(
  question_id SERIAL PRIMARY KEY NOT NULL,
  question TEXT NOT NULL,
);



CREATE TABLE answers 
(
  answer_id SERIAL PRIMARY KEY NOT NULL,
  question_id integer NOT NULL references questions(question_id),
  answer VARCHAR(500) NOT NULL,
  rating integer NOT NULL,
);

-- RATING = 0 <-- ANSWER
-- primary key?
-- Serial
-- What happens if we didn't have rating at all in our data,
-- and wanted to add that feature late
-- How to edit table (UPDATE)
-- How to manipulate 