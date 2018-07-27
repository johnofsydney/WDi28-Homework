// const url = "https://api.nasa.gov/planetary/apod?api_key=PNpUsMRQBPLdgSH3PU45lwwpau3723ZAFuw6bHzu";
//
//
// $.ajax({
//   url: url,
//   success: function(result){
//   if("copyright" in result) {
//     $("#copyright").text("Image Credits: " + result.copyright);
//   }
//   else {
//     $("#copyright").text("Image Credits: " + "Public Domain");
//   }
//
//   if(result.media_type == "video") {
//     $("#apod_img_id").css("display", "none");
//     $("#apod_vid_id").attr("src", result.url);
//   }
//   else {
//     $("#apod_vid_id").css("display", "none");
//     $("#apod_img_id").attr("src", result.url);
//   }
//   $("#reqObject").text(url);
//   $("#returnObject").text(JSON.stringify(result, null, 4));
//   $("#apod_explaination").text(result.explanation);
//   $("#apod_title").text(result.title);
// }
// });


const showImages = function(results) {


  console.log(results); // For debugging.


// show images by drilling into JSON object feedback

  _(results.collection.items).each(function(item) {
    console.log(item.links[0].href);
    const $img = $('<img />', {
      src: item.links[0].href
    }); // alternatively: .attr('src', thumbnailURL);
    $img.appendTo('#images');
  });

};

let nasaURL = `https://images-api.nasa.gov/search`;

const nasaSearch = function(term) {

  console.log('Searching Nasa for', term);

  // const nasaURL = `https://images-api.nasa.gov/search`;
// Json object we create using Api parameters
  $.getJSON(nasaURL, {

    q: term,

  }).done(showImages).done(function (info) {
debugger;
   nasaURL = _( info.collection.links ).last().href // underscore to help set the last url when called, as it is constantly decreasing on the api from 1 to 0

  })

};

$(document).ready(function() {
  $('#search').on('submit', function(event) {
    event.preventDefault(); // Do not submit this form; let's stay on this page.
    const query = $('#query').val();
    nasaSearch(query); // Async
    $('#images').empty();
  });


});
