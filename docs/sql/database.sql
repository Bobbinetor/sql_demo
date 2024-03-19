-- This file is intentionally left blank.
-- You can add your SQL queries for the prefix database here.
-- Use this file to create and manipulate the database tables and data.

-- Example query to create a table for students
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  grade VARCHAR(10)
);

-- Example query to insert data into the students table
INSERT INTO students (id, name, age, grade)
VALUES (1, 'John Doe', 18, 'A');

-- Example query to retrieve all students from the table
SELECT * FROM students;