CREATE TABLE videogames (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  image TEXT -- URL for a photo of the game
);


-- seed data

INSERT INTO videogames (name, genre) VALUES ('Red Dead Redemption', 'Action Adventure');
