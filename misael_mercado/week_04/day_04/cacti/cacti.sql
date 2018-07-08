CREATE TABLE cacti (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
family TEXT,
image TEXT
);

--seed data
INSERT INTO cacti (name, family) VALUES ("Astrophytum columnare", "Cactaceae" )
