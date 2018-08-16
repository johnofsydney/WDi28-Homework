# Playlist Warmup

Beavis and Butthead have fallen on hard times since their show is no longer on prime time. Such hard times in fact that they must share a single second-hand Microsoft Zune between them. The worst thing about this arrangement is that they loathe each other's taste in music.

Write a function that will accept 3 arguments
- one array which is the playlist of all their songs
- two text arguments which represent
  - the current song that is playing,
  - the next song that one of our heroes would like to listen to

The function should return the *minimum number of clicks* of either the _Next_ or _Previous_ buttons that Beavis (or Butthead) will need to press to get to his song.
If you are playing the last song on the Zune, pressing next will take you to the first song. If you are playing the last song, pressing previous will take you to the last song.

So given the playlist
["Be True To Your School", "Raining Blood", "Little Deuce Coupe", "Angel of Death", "South of Heaven", "California Girls", Dead Skin Mask", "Good Vibrations", "Surfin USA", "Hell Awaits"]

The minimum number of clicks to go from
- "Be True To Your School" to "Angel of Death" is 3 (3 clicks of the _Next_ button)
- "Good Vibrations" to "Dead Skin Mask" is 1 (1 ckick of the _Previous_ button)
- "Surfin USA" to "Raining Blood" is 3 (3 clicks of the _Next_ button)

Do it in whatever language you like, I'll do the demo in ruby.
