CREATE TABLE pizzas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  vegetarian BOOLEAN,
  price FLOAT
);

-- seed data
INSERT INTO pizzas (name, vegetarian, price) VALUES ('Supreme', 0, 13.95);
INSERT INTO pizzas (name, vegetarian, price) VALUES ('Pepperoni', 0, 5);
INSERT INTO pizzas (name, vegetarian, price) VALUES ('Vegorama', 1, 13.95);
