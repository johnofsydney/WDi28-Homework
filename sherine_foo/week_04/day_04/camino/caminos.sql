CREATE TABLE caminos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day INTEGER,
  city TEXT,
  image TEXT
);

-- seed data
INSERT INTO caminos (day, city, image) VALUES
(1, "St. Jean Pied De Port", "https://i.imgur.com/o2kAhiB.jpg");
INSERT INTO caminos (day, city, image) VALUES (4, "Pamplona", "https://i.imgur.com/KDNydyJ.jpg");
INSERT INTO caminos (day, city, image) VALUES (5, "Cizur", "https://i.imgur.com/pAB6Qu6.jpg");
INSERT INTO caminos (day, city, image) VALUES (12, "Burgos", "https://i.imgur.com/XTtBnOu.jpg");
INSERT INTO caminos (day, city, image) VALUES (16, "Moratinos", "https://i.imgur.com/DONmGZt.jpg");
INSERT INTO caminos (day, city, image) VALUES (17, "Bercianos del Real Camino", "https://i.imgur.com/CHbcn5p.jpg");
INSERT INTO caminos (day, city, image) VALUES (21, "Manjarin", "https://i.imgur.com/SiFRujC.jpg");
INSERT INTO caminos (day, city, image) VALUES (24, "Pedrafita do Cebreiro", "https://i.imgur.com/fyKnJcf.jpg");
INSERT INTO caminos (day, city, image) VALUES (29, "Santiago", "https://i.imgur.com/PD1DXQK.jpg");
INSERT INTO caminos (day, city, image) VALUES (30, "Fisterra", "https://i.imgur.com/d3KgKEi.jpg");
