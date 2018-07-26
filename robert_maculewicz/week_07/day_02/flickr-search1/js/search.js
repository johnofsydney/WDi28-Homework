// add new plugin underscore.js
const state = {                                //add new
  page: 1,                                    //add new
  lastPage: false                             //add new
};

const showImages = function (results) {
  console.log( results );

  if (results.photos.page >= results.photos.pages) {   //add new
    state.lastPage = true;
  }
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
                                                        //new version
  _(results.photos.photo).each(function (photoInfo) {
      const photoURL = generateURL(photoInfo);
      const $img = $('<img/>', {src: photoURL});
      $img.appendTo('#images');
    });
  }
//        old version
//   results.photos.photo.forEach(function (photo) {
//     const thumbnailURL = generateURL(photo);
//     const $img = $('<img />', {src: thumbnailURL}); // alternatively: .attr('src', thumbnailURL);
//     $img.appendTo('#images');
//     // $(this)[0].src = $(this).();
//   });
// };

const searchFlickr = function (term) {
  if (state.lastPage) { return; }                 //add new
  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Data for the query string (these will be added to the URL)
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
     page: state.page++                          //add new
  }).done(showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Do not submit this form; let's stay on this page.
    $('#images').empty();
    state.page = 1;                               //add new
    state.lastPage = false;                       //add new
    const query = $('#query').val();
    searchFlickr(query);
  });
  const throttledSearchFlickr = _.throttle( searchFlickr, 6000, {trailing: false}); //add new line

  $(window).on('scroll', function () {
    // scrollBottom is the number of pixels in the document below the bottom of the window.

    const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );



    // console.log( $(document).height(), $(window).height(), $(window).scrollTop(), scrollBottom );

    if (scrollBottom < 400) {
      const query = $('#query').val();
      throttledSearchFlickr(query);         //new line
      // searchFlickr(query);              // old version
    }

     // const query = $('#query').val();
    // searchFlickr(query);
   // $(this)[0].src = $(this).remove();
  });
});
