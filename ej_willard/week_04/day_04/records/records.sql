CREATE TABLE records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist TEXT,
  record_name TEXT,
  record_specs TEXT,
  pressing_year INTEGER,
  image TEXT
);

--seed data

INSERT INTO records (artist, record_name, record_specs, pressing_year) VALUES ('Blink-182', 'Blink-182', 'pink LTD 180g', 2018) --do images later
