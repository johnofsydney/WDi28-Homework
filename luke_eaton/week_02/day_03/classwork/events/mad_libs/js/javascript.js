console.log("connected");



function makeMadLib() {
  var storyDiv = document.getElementById("story");
  var person = document.getElementById("person").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  storyDiv.innerHTML = person + " really likes " + adjective + noun + " cucumbers ";
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', makeMadLib);




/*Pamela really likes pink cucumbers*/
