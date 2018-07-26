

const showCharacter = function (data) {
  const randomIdArray = _.range(20)
  const randomId = _(randomIdArray).sample()
  const charName = data.results[randomId].name
  const charImage = data.results[randomId].image

  $( "#content" ).append( `<p>${charName}</p>` );
  const $img = $('<img/>', {src:charImage});
  $img.appendTo('#content');

}
const mortyURL = "https://rickandmortyapi.com/api/character"
const rickAndMorty = function (id_num, page_num){
$.getJSON(mortyURL,{
  id: id_num,
  pages: page_num,
  format: 'json'
}).done(showCharacter)
}

$(document).ready(function () {
  $('#go').on('click', function(){
  const randomIdArray = _.range(450)
  const randomId = _(randomIdArray).sample()
  const randomPageArray = _.range(25)
  const randomPage = _(randomPageArray).sample()
  $('#content').empty();
  rickAndMorty(randomId,randomPage)
  })
})
