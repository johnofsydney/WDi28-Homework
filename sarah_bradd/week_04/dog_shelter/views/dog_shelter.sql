CREATE TABLE dog_shelter (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  name TEXT,
  location TEXT,
  image TEXT --URL for a photo of a dog
);

-- seed data
INSERT INTO dog_shelter (breed, name, location) VALUES ('Rottweiler', 'Dalmation','Sydney');
