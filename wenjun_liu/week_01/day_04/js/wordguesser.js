const hold = ['F', 'O', 'X'];
let guessed = ['_','_','_'];
let completed = false;
let letter;

const guessLetter = (letter) => {
  for (let i=0;i<hold.length;i++){
    if (hold[i]===letter){
      guessed[i] = letter;
    }
  }
}

const check = () => {
  completed = true;
  for (let i=0; i<guessed.length;i++){
    if (guessed[i] === '_') {
      completed = false;
    }
  }
  return completed;
}

while (!completed) {
  letter = prompt("Please enter a letter");

  //stop the prompt
  if(letter === "STOP"){
    break;
  }

  guessLetter(letter);
  if(!check()){
    console.log(guessed);
  } else {
    console.log(guessed);
    console.log('Congratulation!')
  }
}
