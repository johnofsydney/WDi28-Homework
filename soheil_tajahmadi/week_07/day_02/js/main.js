console.log('connected');
let resultHeight = 0;
let pagesShown = 0;

const pageSize = function () {
  resultHeight = $(document).height();
  pagesShown = 1;
}

const showImages = function (results) {

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
        '_q.jpg'
      ].join('');
  };

  console.log( results );

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL});
    $img.appendTo('#results');
  });
};

const searchFlickr = function (term, pageNumber) {
  console.log('Searching Flickr for', term, 'page number', pageNumber);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: pageNumber
  }).done(showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    const queryPage = 1;
    $('#results').children().remove()
    searchFlickr(query, queryPage);
    pageSize();
  });

  $(window).on('scroll', function () {

    const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
    pagesShown = $(document).height() / resultHeight;

    if (scrollBottom < 100) {

      const query = $('#query').val();
      searchFlickr(query, pagesShown + 1);
    }

  });
});
