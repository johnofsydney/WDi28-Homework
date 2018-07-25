CREATE TABLE models (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  makes TEXT,
  models TEXT,
  year INTEGER,
  image TEXT
);

INSERT INTO models (id, makes, models, year) VALUES (1,'Bugatti','Chiron', 2018);
INSERT INTO models (id, makes, models, year) VALUES (2,'Lamborghini','Urus', 2018);
