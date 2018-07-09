CREATE TABLE videogames (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  completed INTEGER,
  image TEXT
);

-- seed data

INSERT INTO videogames (name, completed) VALUES ('Red Dead Redemption', 2);
