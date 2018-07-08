CREATE TABLE parrots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  scientific_name TEXT,
  image TEXT -- URL for a photo of a parrot
);

-- seed data
INSERT INTO parrots (name, scientific name) VALUES ('Grey parrot', 'P.erithacus');
INSERT INTO parrots (name, scientific name) VALUES ('Timneh parrot', 'P.timneh');
INSERT INTO parrots (name, scientific name) VALUES ('Senegal parrot', 'P.senegalus');
INSERT INTO parrots (name, scientific name) VALUES ('Red-bellied parrot', 'P.rufiventris');
INSERT INTO parrots (name, scientific name) VALUES ('Cape parrot', 'P.robustus');
INSERT INTO parrots (name, scientific name) VALUES ('Red-fronted parrot', 'P.gulielmi');
INSERT INTO parrots (name, scientific name) VALUES ('Yellow fronted parrot', 'P.flavifrons');
