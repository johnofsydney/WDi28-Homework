CREATE TABLE albums(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    release_year INTEGER,
    cover_url TEXT
);

CREATE TABLE songs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    youtube_url TEXT,
    album_id INTEGER -- Songs belong to album only. Albums can have many songs.
);

INSERT INTO albums VALUES(1, "Revival", 2017, "https://s3.amazonaws.com/hiphopdx-production/2017/12/eminem120817-827x620.jpg");
INSERT INTO albums VALUES(2, "Recovery", 2010, "https://upload.wikimedia.org/wikipedia/en/6/60/Recovery_Album_Cover.jpg");
INSERT INTO albums VALUES(3, "Relapse", 2009, "https://upload.wikimedia.org/wikipedia/en/4/42/Relapse_%28album%29.jpg");

INSERT INTO songs VALUES(1, "River", "https://www.youtube.com/watch?v=wfWIs2gFTAM", 1);
INSERT INTO songs VALUES(2, "Not Afraid", "https://www.youtube.com/watch?v=j5-yKhDd64s", 2);
INSERT INTO songs VALUES(3, "Walk on Water", "https://www.youtube.com/watch?v=ryr75N0nki0", 1);
