CREATE DATABASE questions_database;

CREATE TABLE questions 
(
  QUESTION_ID SERIAL PRIMARY KEY NOT NULL,
  QUESTION TEXT NOT NULL,
)

INSERT INTO questions (question)
VALUES ('HOW MUCH WOULD A WOODCHUCK CHUCK?...')

CREATE TABLE answers 
(
  ANSWER_ID SERIAL PRIMARY KEY NOT NULL,
  QUESTION_ID integer NOT NULL references questions(QUESTION_ID),
  ANSWER VARCHAR(500) NOT NULL,
  RATING integer NOT NULL,
)

-- RATING = 0 <-- ANSWER
-- primary key?
-- Serial
-- What happens if we didn't have rating at all in our data,
-- and wanted to add that feature late
-- How to edit table (UPDATE)
-- How to manipulate 