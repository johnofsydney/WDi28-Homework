CREATE TABLE drinks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  recipe TEXT,
  image TEXT
);

-- SEED data

INSERT INTO drinks (name, recipe) VALUES ('Absinthe', 'The original absinthe recipe: first you pour roughly three ounces of absinthe into a heavy parfait-style stemmed absinthe glass. A perforated absinthe spoon is set upon the rim of the glass and on the spoon is placed a cube of sugar. Ice-cold water is ever so slowly dripped from a glass carafe onto the cube. The sugar dissolves and you continue pouring until the ratio of absinthe to water is about two to five parts, depending upon your taste and fortitude.');
