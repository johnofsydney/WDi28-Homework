let maxPage = 1;
let currentPage;
let throttleFlag;
const showImages = function (results) {
  console.log(results)
  maxPage = results.photos.pages
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
  }

  results.photos.photo.forEach(function(photo){
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL})
    $img.appendTo('#images');
  })

};
const reset = function (){
  currentPage++;
  throttleFlag = true;
};

const searchFlickr = function(term){
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: currentPage
  }).done(showImages)
  .done(reset);
};

$(document).ready(function(){
  $('#search').on('submit',function(event){
    currentPage = 1;
    throttleFlag = true;
    event.preventDefault();

    const query = $('#query').val();
    searchFlickr(query)

    $(window).on('scroll', function(){
      const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
      if (scrollBottom <150 && currentPage <= maxPage && throttleFlag) {
        throttleFlag = false;
        searchFlickr(query)
      }
    })
  });
});
