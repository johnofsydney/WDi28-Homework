console.log(`Welcome to the word guessing game!`);

let word = ["F","O","X"];
let guessed = ["_","_","_"];

const guessLetter =  function (letter) {
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      guessed[i] = letter;
      console.log(`Congradulation you got a letter right! `);
      console.log(`${guessed}`);
    } //else {
    //   console.log("Sorry you guessed the wrong letter");
    //   console.log(`${guessed}`);
    //}
  }
  for (var i = 0; i < guessed.length; i++) {
    if (guessed[i] === "_") {
      console.log("looks like you have some more letters to guess! Keep going!");
      break;
    } else {
      console.log("Congradulations your all done!");
    }
  }
}
