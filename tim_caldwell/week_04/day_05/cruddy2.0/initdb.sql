CREATE TABLE errors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  error_msg TEXT,
  err_meaning_id INT
);

INSERT INTO errors (name, error_msg, err_meaning_id)
VALUES
  ("No Such Table","SQLite3::SQLException: no such table:",1);

CREATE TABLE err_meanings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  meaning TEXT,
  example TEXT
);

INSERT INTO err_meanings (meaning, example)
VALUES
  ("SQL Lite 3 cannot find the table you're looking for when trying to query it", "SELECT ""err_meanings"".* FROM ""err_meanings""); when your table is called 'err_meaning'");