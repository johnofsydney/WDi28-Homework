$(document).ready(function() {
  $(".get-animal").on("ajax:success", function(event, data, status, xhr) {
     //debugger
    data = event.detail[0];
    $animal = $("<p>").text("Animal: " + data.name);
    $species = $("<p>").text("Species: " + data.species.name);
    $status = $("<p>").text("Habitat: " + data.species.habitat.name);
    $(".response-text").empty().append($animal).append($species).append($status);
  }).on("ajax:error", function() {
    $error = $("<p>").text("An error occurred. That's all we know.");
    $(".response-text").empty().append($error);
  });
});
