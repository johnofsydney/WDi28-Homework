CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  director TEXT,
  cast TEXT,
  thumbnail TEXT
);

INSERT INTO movies (name, director) VALUES ('Pulp Fiction', 'Quentin Tarantino');
INSERT INTO movies (name, director) VALUES ('Dogville', 'Lars Von Trier');


CREATE TABLE lists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  comment TEXT
);

INSERT INTO lists (name,comment) VALUES ('Greatest movies of all time', 'A selection of Best movies ever!');
