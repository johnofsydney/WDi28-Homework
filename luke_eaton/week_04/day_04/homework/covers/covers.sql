CREATE TABLE covers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist TEXT,
  album TEXT,
  image TEXT -- URL for a photo of the album cover
);

-- seed data
INSERT INTO covers (artist, album) VALUES ('tool', 'aenima');
