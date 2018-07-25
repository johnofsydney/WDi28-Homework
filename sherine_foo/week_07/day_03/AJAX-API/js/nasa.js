console.log("nasa");

$(document).ready(function () {
  $.ajax('https://api.nasa.gov/planetary/apod?api_key=6Bi7U3g0Zo4M6J7jGDz5gCzLJcdKQi5aa5N6fj7E').done(function( data ) {
    console.log(data);

    $('body').css('background-image', `url(${data.hdurl})`);
    console.log(data.hdurl)
  })
});


const generateURL = function (image) {

  // get id for generate URL


  $.ajax('https://epic.gsfc.nasa.gov/api/natural').done(function (data2){
    console.log(data2);
    // TODO need to generate running number for photoID
    // data2.forEach(function (i){
      // console.log();
    // $.each(data2, function(index){
      let photoID = data2[0].image;
      console.log(photoID);
      let photoDateData = data2[0].date;
      console.log(photoDateData);
      let dateArr = photoDateData.split(" ");
      let getDate = dateArr[0].split("-")
      let year = getDate[0];
      let month = getDate[1];
      let day = getDate[2]
      console.log(year, month, day);
    // })
  });
  // })
  const URL = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${photoID}`;
  return;

   
}


$(document).ready(function () {
  $.ajax()
});
