let apiPending;
const showImages = function(results) {
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
      ].join('');
  };
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img/>', {src:thumbnailURL});
    $img.appendTo('#images');
  })
  apiPending = false;

}


const searchFlickr = function(term, pageTarget) {

const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
$.getJSON(flickrURL, {
  method: 'flickr.photos.search',
  api_key: '63d8a83c1f8a75ab3a59b4dc4421b792',
  text: term,
  page: pageTarget,
  format: 'json'
}).done(showImages);
}

$(document).ready(function(){
  page = 1;
  $('#search').on('submit', function(event){
    event.preventDefault();
    const query = $('#query').val();
    $('#images').html("");
    searchFlickr(query);
  })

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height())
    console.log($(document).height(), '-', $(window).scrollTop(), '+', $(window).height(), '=', scrollBottom);

      if(apiPending !== true && scrollBottom<500){
        const query = $('#query').val();
        apiPending = true;
        searchFlickr(query, page+=1)
      }
  });
});
