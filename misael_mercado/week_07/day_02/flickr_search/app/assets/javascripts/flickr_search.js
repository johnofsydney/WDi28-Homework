const state = {
  page: 1,
  lastPage: false
};



const showImages = (results) => {
  // Nested or helper function
  const generateURL = (photo) => {
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

  results.photos.photo.forEach( (photo)  =>{
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {
      src: thumbnailURL
    }); // alternative to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  })

};

const searchFlickr = (term) => {
  if (state.lastPage) {
    return;
  }
  const flickURL = 'https://api.flickr.com/services/rest?jsoncallback=?'
  $.getJSON(flickURL, {
    /// DAta for the jquery string
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: state.page++,
  }).done(showImages).done((r) => {
    if (r.photos.page >= r.photos.pages) {
      state.lastPage = true;
    }

  });
};

$(document).ready(() => {
  $('#search').on('submit',(event) => {
    event.preventDefault();
    // find the user's search term
    const query = $('#query').val();
    state.lastPage = false;
    state.page = 1;
    $('#images').empty();
    searchFlickr(query);
  });

  // using underscore-rails // not sure if it is working

  const throttledSearchFlickr = _.throttle(searchFlickr, 6000, {
    trailing: false
  });

  $(window).on('scroll', () => {
    console.log($(document).height(), $(window).width(), $(window).scrollTop());
    const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    if (scrollBottom < 1000) {
      const query = $('#query').val();
      throttledSearchFlickr(query);

    }


  })
});
