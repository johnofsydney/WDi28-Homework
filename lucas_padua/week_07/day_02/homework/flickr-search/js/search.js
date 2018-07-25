
const state = {
  page: 1,
  requestInProgress: false,
  lastPage: false
};




const showImages = function (results) {

  // Nested or helper function
  const generateURL = function (photo) {
      return [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_q.jpg' // Change 'q' to something else for different sizes
      ].join(''); // Return a string by join()ing the array elements.
  };

  console.log( results );

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // alternatively: .attr('src', thumbnailURL);
    $img.appendTo('#images');
  });
};

const searchFlickr = function (term) {
  if (state.requestInProgress || state.lastPage ){
    return;
  }
  state.requestInProgress = true;

  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Data for the query string (these will be added to the URL)
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json'
    page: state.page++
  }).done(showImages).done(function () {
    state.requestInProgress = false;
  }).done(function (results) {
    if (results.photos.page >= results.photos.pages){
      state.lastPage = true;
    }

  });



};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Do not submit this form; let's stay on this page.
    const query = $('#query').val();
    state.page = 1;
    state.lastPage = false;
    searchFlickr(query);
    $('#images').empty();
  });

  // Very twitchy
  $(window).on('scroll', function () {
    // scrollBottom is the number of pixels in the document below the bottom of the window.
    const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
    // console.log( $(document).height(), $(window).height(), $(window).scrollTop(), scrollBottom );

    if (scrollBottom < 500) {
      const query = $('#query').val();
      searchFlickr(query);
    }

  });
});
