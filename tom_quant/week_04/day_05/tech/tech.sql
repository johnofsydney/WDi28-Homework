CREATE TABLE earphones (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  price INTEGER,
  noise_cancelling BOOLEAN,
  notes TEXT
);

INSERT INTO earphones (name, image, price) VALUES ('Audio-Technica ATH-ANC33iS', 'https://earbudsshop.com/wp-content/uploads/2015/11/AudioTechnica-ATH-ANC33iS-QuietPoint-Active-Noise-Cancelling-In-ear-Headphones-Black-0-1.jpg', '$79')
