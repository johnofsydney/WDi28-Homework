const showImages = function(results) {
  //nested or helper function, helps generate the url to show images
    const generateURL = function(photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg', //change 'q' to something else for different sizes
    ].join(''); //join everything in array together into a string.
  };


console.log( results );


  results.photos.photo.forEach(function(photo) { //for each photo run this function
    const thumbnailURL = generateURL(photo); //generate url for that photo
    const $img = $('<img />', {src: thumbnailURL}); //alt to .attr('src, thumbnailURL')
    $img.appendTo('#images')
  })
};

const searchFlickr = function(term, pageTarget) { //we can define pageTarget anywhere
  console.log('searching flickr for', term, pageTarget);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    //data for the query string (these will be added to the url)
    method: 'flickr.photos.search', //from the flickr services, could you run this function
    api_key: '2f5ac274ecfac5a455f38745704ad084', //not a secret key
    text: term,
    page: pageTarget, //placeholder so we can define two parameters when searchFlickr is called
    format: 'json',
  }).done(showImages);
};

$(document).ready(function () {

  let page = 1 //initialising pageTarget value, page is always default to one as per flickr docs

  $('#search').on('submit', function(event) {
    event.preventDefault(); //Do not submit this form
    //find the user's search term
    const query = $('#query').val();
    //search flickr
    searchFlickr(query);
  });

  $(window).on('scroll', function () {
    //scrollBottom is the number of pixels in the document below the bottom of the window
    const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height() );

    // console.log( $(document).height().$(window).height(), $(window).scrollTop(), scrollBottom );

    if (scrollBottom < 500) {//if condition met, we will make another request for picture
      const query = $('#query').val();
      //search flickr
      searchFlickr(query, page++); //only search when a particular target is met
    }
  });
});
