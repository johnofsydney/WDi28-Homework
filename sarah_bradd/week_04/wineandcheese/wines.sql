CREATE TABLE wines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wine_type TEXT,
  name TEXT,
  region TEXT,
  image TEXT --url for picture of wine
);
--seed data
INSERT INTO wines (wine_type, name, region) VALUES ('Red','The old bastard','Barossa');
