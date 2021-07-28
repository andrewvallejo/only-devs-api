CREATE DATABASE questions_database;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question TEXT NOT NULL
);

INSERT INTO questions (question)
VALUES ('What is hoisting?'),
('How you would localize an application?'),
('What are some tools and strategies you use to prevent shipping unstable code to production?'), 
('What does CORS stand for and what issue does it address?'),
('What is a pseudo class?'),
('What’s the difference between display: inline and display: inline-block?'),
('What does event bubbling or event propagation mean?'),
('How does the web work?');

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER NOT NULL REFERENCES questions(id),
  answer TEXT NOT NULL,
  rating integer NOT NULL,
  answer_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO answers (question_id, answer, rating)
VALUES (8, 'It just does', 0);

INSERT INTO answers (question_id, answer, rating)                                                                                                            
VALUES (2, 'Add languages', 0);