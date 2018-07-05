CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  genre TEXT,
  blurb TEXT,
  art TEXT --boolean: 0 = alive - 1 = dead;
);

INSERT INTO games (title,genre,blurb,art)
VALUES ('Starcraft','Real Time Strategy (RTS)','Starcraft is a sci-fi fantasy Real Time strategy game that pits humans against alien species to save the galaxy.','');