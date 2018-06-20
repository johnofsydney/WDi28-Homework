console.log("connected");

values = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
}


const letterScore = function(letter) {
  // loop through the values object, one key at a time.
  for (let key in values) {
    // variables are free - here I am making an array for each list of letters that has the same score
    let letters = values[key]
    // and here I see if the letter we pass in exists in the letters array
    if ( letters.indexOf(letter) > -1 ) {
      // if it does, return the numerical value of the key
      return +key
    }
  }

}

// this is the main function - we are passing in word
const scrabble = function(word) {
  // set the initial value
  wordScore = 0

  // turn the word into an array
  wordArray = word.toUpperCase().split("")

  // loop through the array
  for (var i = 0; i < wordArray.length; i++) {
    let letter = wordArray[i]
    // get the score for each letter using 2nd function letterScore
    wordScore = wordScore + letterScore(letter)
  }

  // after the loop has finished, return the score
  return wordScore
}




//////
// here is an alternative solution. The main differences;
// * all code is inside the object word
// * the method word.scrabble contains all the code, rather than splitting off letterScore as I did above.


const word = {

  values: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  scrabble: function( word ){
    // Takes the argument and coverts the string to uppercase.
    word = word.toUpperCase();
    // console.log(word);
    let score = 0;

    // iterates through each letter in the string.
    for (let i = 0; i < word.length; i++) {
      // console.log(word[i]);

      // Loops through the object with each letter of the string.
      for (let key in this.values) {
        // console.log(this.values[key]);

        // checks to see if the letter is in the object. If so, we take the key from that value and turn it into an integer then add that integer to the score variable.
        if ( this.values[key].indexOf( word[i] ) > -1 ){
          score += parseInt(key);

          // break out so we don't have to loop through the whole object.
          break;
        }
      }
    }
    return score;
  }

};

console.log(word.scrabble("cabbage"));
