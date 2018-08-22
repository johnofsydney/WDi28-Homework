console.log("AJAX FLICKR");

let page = 1;
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

// TODO remove duplicate pics
  console.log(results);
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    console.log(thumbnailURL);
    const $img = $('<img />', {src: thumbnailURL});
    $img.appendTo('#image')
  })
};

const searchFlickr = function (term, pageTarget) {
  console.log('Searching Flickr for', term, page);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    page: pageTarget,
    format: 'json',
  }).done(showImages)
    // }).done(function (showImages) {
    //   $('#image').html("");
    //   $('#image').html(showImages);
    // });

};

// TODO clear page
// if image is not empty, location.reload();
  $(document).ready(function() {
    $('#search').on('submit', function(event){
      event.preventDefault();
      const query = $('#query').val();
      // searchFlickr(query, page += 1);
      searchFlickr(query, page += 1);
      // button.location.reload();


    });

    $(window).on('scroll', function() {
      const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );

      if (scrollBottom < 500) {
        const query = $('#query').val();
        searchFlickr(query);
      }
    });
  });

  // last page if oage>

  //reset research html("")
  // do the reset before serachFlickr.
