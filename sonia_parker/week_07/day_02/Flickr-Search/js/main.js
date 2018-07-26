// This variable will be used to store whether an AJAX request is running
// Prevent the code from making too many requests. Only one at a time.
// Hubby says this is a hacky way to do it. He suggests that the proper way to do it is to use promises.
// I told him shut up, we are tackling that tomorrow.... maybe
let isFlickrSearchRunning = false;

// This variable tracks which page of results we should load from Flick
// The FlickSearch method increments the value before it actually searches, therefore we set this to zero here,
// so that on the first search, it will actually grab page 1.
let searchPage = 0;

// When the user presses the search button, we save the value here and use it every time we load the next page of
// results. If we just load from the input field, the user will see different results.
let searchTerm = '';

// This will track the last page for the current search. Once we have loaded all the search result pages, we won't
// load any more.
let maximumPages;

const showImages = function (results) {

    if (searchPage == 1) {
        maximumPages = results.photos.pages;
        // console.log('Max pages for ' + searchTerm  + ' is ' + maximumPages);
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
        ].join('');
    };
    console.log(results);
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo);
        const $img = $('<img />', {
            src: thumbnailURL
        }); // alternatively: .attr('src', thumbnailURL);
        $img.appendTo('#images');
    });

    if (searchPage >= maximumPages) {
        $("<p>No more results</p>").appendTo('#images');
    }

    // We have processed the search results from Flickr, so we set the variable back to false
    isFlickrSearchRunning = false;
};


const searchFlickr = function (term) {
    // If we are already waiting for a search result to come back from Flickr, don't run another
    if (isFlickrSearchRunning) {
        //console.log('Already running a search on Flickr, aborting.');
        return;
    }

    isFlickrSearchRunning = true;

    // Increment search page to get the next lot of results
    searchPage++;

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

    $.getJSON(flickrURL, {
        // Data for the query string (these will be added to the URL)
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
        text: term,
        format: 'json',
        page: searchPage,
        per_page: 100
    }).done(showImages);
};

$(document).ready(function () {
    $("#search").on("submit", function (event) {
        event.preventDefault(); //do not submit this page, lets stay on this page
        //find users search term

        // Clear existing photos
        $('#images').empty();

        // Reset page count
        searchPage = 0;

        searchTerm = $("#query").val();
        searchFlickr(searchTerm);
        //
    });
    //very twitchy
    $(window).on("scroll", function () {

        // Maximum search pages reached
        if (searchPage >= maximumPages) {
            return;
        }

        const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
        if (scrollBottom < 500) {
            searchFlickr(searchTerm);
        }
    });
});