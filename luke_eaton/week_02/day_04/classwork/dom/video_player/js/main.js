const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const videoURL = link.getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );
  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbnailURL);
  link.appendChild( thumbnail );
}
