CREATE TABLE students(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT ---URL for a photo
);

INSERT INTO students(name,family) VALUES ('Robert', 'Smith');
