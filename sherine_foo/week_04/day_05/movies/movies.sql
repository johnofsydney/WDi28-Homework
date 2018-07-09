CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  image TEXT -- URL
--  soundtrack TEXT, -- URL
);

-- seed data

INSERT INTO movies (name, genre, image) VALUES ("Diamonds Are Forever", "Action", "https://a.1stdibscdn.com/archivesE/upload/6103022/f_1979552/ORG_Diamonds_are_forever081_l.jpg");
