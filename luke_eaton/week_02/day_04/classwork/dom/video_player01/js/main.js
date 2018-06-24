  const $links = $('a');

  for (let i = 0; i < $links.length; i++) {
  const $link = $( $links[i] ); // Convert a vanilla DOM node back into a jQ object

  const videoURL = $link.attr('href'); // getter
  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );

  const $thumbnail = $('<img>').attr('src', thumbnailURL); // setter
  $link.append( $thumbnail ); // or .prepend() if you prefer

  // Alternatively, as a one liner with chaining:
  // $('<img>').attr('src', thumbnailURL).prependTo('$link');
