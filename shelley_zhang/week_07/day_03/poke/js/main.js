  const fetchPoke = function (param) {

    // const param = document.getElementById("poke").value;

    $.ajax(`https://pokeapi.co/api/v2/pokemon/${param}/`).done( function(info) {
      const pokeID = info.id
      const pokeName = info.name;
      const pokeWeight = info.weight;
      const pokeImage = info.sprites.front_default;

      console.log(pokeImage);
      console.log(pokeName);
      console.log(pokeID);
      console.log(pokeWeight);

      $('#pokeDetails').attr('src', pokeImage) //append src to img on html
      $("#name").html(info.name);
      $("#weight").html(info.weight);
      $("#pokeID").html(info.id);

    });
  };


$('#search_form').on('submit', function (event) {
  event.preventDefault(); //default action of event won't occur (page refresh)
  const param = document.getElementById("poke").value;
  fetchPoke(param);
});

//don't need doc ready as we have moved the main js script to the bottom of the html page. Page will load before any js is loaded.
