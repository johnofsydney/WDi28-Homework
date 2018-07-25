console.log('connected');
//globals
const globals = {
  ts: 0,
  publicKey: "aa5b373ce322f66dfc052f3f31671e95",
  privateKey: "7c31dd8ea7f6130eb6837a998d623ec43fe70f84"
};


// get the search term from the html form
//construct the API search request based on Marvel request structure for character name
  //create an MD5 hash based on public, private and random keys (something like time, or counter)
//process the JSON response received from Marvel for possible results
//construct image and some text for the character
//insert image into the html along with a description for the character

//Extras
//create buttons for retrieving a certain number of comics for Character

const showCharacter = function (charDetails) {

  const thumbImage = charDetails.thumbnail.path + ".jpg";
  const charDesc = charDetails.description;
  const charName = charDetails.name;
  const charId = charDetails.id;



  const $img = $('<img >', {src: thumbImage, class: "image"});
  const $name = $('<h3>' + charName + '</h3>' );
  const $p = $('<p>' + charDesc + '</p>');
  const $div = $('<div>', {class: "character"});

  $img.appendTo($div);
  $name.appendTo($div);
  $p.appendTo($div);
  $div.appendTo('.results');
}

const showResults = function(results) {
  _.each(results.data.results, showCharacter);
}



const searchMarvel = function(charName) {
  globals.ts = _.random(1111,9999).toString();
  let hash = CryptoJS.MD5(globals.ts + globals.privateKey + globals.publicKey).toString();
  requestUrl = [
    "https://gateway.marvel.com:443/v1/public/characters?name=",
     charName,
     "&ts=",
     globals.ts,
     "&apikey=",
     globals.publicKey,
     "&hash=",
     hash
   ].join('')
   $.getJSON(requestUrl).done(showResults)
}


$(document).ready(function () {
  //attach search to search form action
  $('#charSearch').on('submit', function(event) {
    //disable default action
    event.preventDefault();
    //call API to retrieve requested info from the server
    let charName = $("#charName").val()
    searchMarvel(charName);

    //put the returned information on the screen


  });

});
