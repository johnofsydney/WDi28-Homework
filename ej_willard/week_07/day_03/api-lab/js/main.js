
//as soon as page loads making ajax request and getting all the way down to latitude here.
$.ajax('http://api.open-notify.org/iss-now.json').done(function (result) {
  // console.log(result.iss_position.latitude);
  // $('<p>').text(result.iss_position.latitude).appendTo('#latitude');
    $('#latitude').text(`Latitude of ISS: ${result.iss_position.latitude}`).appendTo('#latitude');
    $('#longitude').text(`Longitude of ISS: ${result.iss_position.latitude}`).appendTo('#longitude');
  console.log(result.iss_position.longitude);

});

$.ajax('http://api.open-notify.org/astros.json').done(function (result) {
  $('.peopleInSpace').text(`There are ${result.number} people in space right now. These people include:`);

  let allPeople = result.people;

  _(allPeople).each(function(element) {

    //////NOTE ONLY SHOWS LAST PERSON

    $('<li>').text(`Name: ${element.name}`).appendTo('.listOfPeople');


  })

})



//set timeout or interval that fetches ajax function at all times.
//can also put marker on map showing lat and long with the timeout or interval to update and move accorss map.

// // let weather = new XMLHttpRequest();
// // weather.open('GET', 'http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json', false);
// // weather.send();
// //
// // let result = JSON.parse(weather.response);
// // let place = "Current Location: " + result.current_observation.display_location.full + "<br />";
// // let temp = result.current_observation.tempurature_string + "<br />";
// // let wind = result.current_observation.wind_string + "<br />";
// //
// // $(document).ready(function() {
// //
// //   place.appendTo('#weather');
// //   $('#temp').innerHTML = temp;
// //   $('#wind').innerHTML = wind;
// //
// //
// // });


//trying for google maps:

// $(document).ready(function () {
//
//
// console.log( locations );
//
//
//   const latitude = $('#map_index').data('latitude');
//   const longitude = $('#map_index').data('longitude');
//   const title = $('#map_index').data('title');
//
//   handler = Gmaps.build('Google');
//   handler.buildMap({ provider: {}, internal: {id: 'map_index'}}, function(){
//     const locationMarkers = [];
//
//     for (let i = 0; i < locations.length; i++) {
//       let l = locations[i];
//       locationMarkers.push({
//         "lat": l.latitude,
//         "lng": l.longitude,
//         "infowindow": title
//       });
//     }
//
//     console.log( 'markers', locationMarkers )
//
//     markers = handler.addMarkers(locationMarkers);
//     console.log('added markers')
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
//   });
// });
// //
