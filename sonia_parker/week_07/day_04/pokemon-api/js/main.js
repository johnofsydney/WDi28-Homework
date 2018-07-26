console.log("connected poki");
$(document).ready(function() {
  $("#pokiSearch").click(function() {
    let randomPoki = _.random(1, 100);
    console.log(randomPoki);
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomPoki;
    $.getJSON(url).done(function(json) {
      console.log(json);
      console.log(json.name);
      // console.log(json.results.species.url);
      $("#pokemonName").html(json.name);
      $("#pokemonImage").attr('src', json.sprites.front_shiny);
    });
  });
});