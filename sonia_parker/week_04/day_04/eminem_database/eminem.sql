CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  release_year INTEGER,
  image_url TEXT
);
INSERT INTO albums (title, release_year) VALUES ("Revival", 2017);
INSERT INTO albums (title, release_year) VALUES ("Recovery", 2010);
INSERT INTO albums (title, release_year) VALUES ("Relapse", 2009);
