CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INTEGER,
  image TEXT
);

--seed data

INSERT INTO albums (title, year) VALUES ('Blink182', 2003);
INSERT INTO albums (title, year) VALUES ('Melodrama', 2017);
