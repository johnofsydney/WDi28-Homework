let PAGE = 1, PAGES = 1;
const showImages = function ( result ) {
  // helper function to get url from photo
  const generateSRC = function ( photo ) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // change 'q' to something else for different sizes
    ].join('');
  };

  const generateURL = function ( photo ) {
    // https://www.flickr.com/photos/{user-id}/{photo-id}
    return ['https://www.flickr.com/photos/',
        photo.owner,
        '/',
        photo.id
      ].join('');
  }
  
  PAGES = result.photos.pages;
  let photos = result.photos.photo;
  
  photos.forEach( ( photo ) => {
    const thumbnailSRC = generateSRC( photo );
    const pageURL = generateURL( photo )

    $a = $('<a>', {href: pageURL, target: '_blank', class: "flickr-result"});
    $a.append($('<img>', {src: thumbnailSRC}));

    $a.appendTo('#images');
  });

}

const resetSearch = function () {
  PAGE = 1;
  PAGES = 1;
  $('#images').html("");
}


const searchFlickr = function ( term, callback ) {
  if (PAGE > PAGES) {
    console.log("already loaded the last page");
    return; // dont do another request if we've reached max pages
  }
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'

  $.getJSON(flickrURL, {
    //data to add to url
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', //not secret key
    text: term,
    format: 'json',
    page: PAGE
  }).done( callback );
}

$( document ).ready( () => {
  // attach event on form submit
  $('#search').on('submit', (e) => {
    e.preventDefault();
    resetSearch();

    searchFlickr( $('#query').val(), showImages );
  })

  // attach infinite scroll event
  const debouncer = debounce(infiniteScroll, 250, false)
  $(document).on('scroll', debouncer)

})


const infiniteScroll = function ( event ) {
  // make sure it's a dom node
  element = event.target
  // debugger;
  if (element === $(element)) {
    element = element[0]
  }

  const clientHeight = element.scrollingElement.clientHeight
  const scrollTop = element.scrollingElement.scrollTop
  const scrollHeight = element.scrollingElement.scrollHeight

  if (clientHeight + scrollTop >= scrollHeight - (clientHeight / 2)) {
    console.log("loading flikr page",++PAGE);
    searchFlickr($('#query').val(), showImages, );
  }
}


function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};