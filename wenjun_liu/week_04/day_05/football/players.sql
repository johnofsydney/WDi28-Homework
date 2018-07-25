CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  position TEXT,
  age INTEGER,
  club_id INTEGER
);

INSERT INTO players (name, country, position, age, club_id) VALUES ('Cristiano Ronaldo','Portugal','Forward', 33, 3);
