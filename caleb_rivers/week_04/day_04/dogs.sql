CREATE TABLE dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  image TEXT,
  ranking INTEGER --out of ten
);

INSERT INTO dogs (breed, image, ranking) VALUES ('German Shepherd', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg', 10)
