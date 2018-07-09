CREATE TABLE writers (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
life TEXT,
image TEXT -- This the url for the image
);

--- seed data
INSERT INTO writers (name, life) VALUES ('Alfred Jarry', '1873 -1907');
