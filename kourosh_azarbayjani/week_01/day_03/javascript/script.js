 console.log("connected");
//
// *********************************************************************************************************************************************************************************************
//
// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function ( a, b ) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
// *********************************************************************************************************************************************************************************************

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus

const maxOfThree = function(num1, num2, num3){
  if(num1>num2 && num1>num3){
    return num1;
  }
  if(num2>num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log( maxOfThree(1,2,3));

// *********************************************************************************************************************************************************************************************

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(str){
  const arrayForward = str.split("");
  let arrayReverse = [];
  for (let i = arrayForward.length-1; i >= 0; i--) {
     arrayReverse.push(arrayForward[i]);
  }
return arrayReverse.join("");
}
console.log(reverseString("brooks"));

// *********************************************************************************************************************************************************************************************

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function ( words ) {
    let longestLength = 0;

    for ( let i = 0; i < words.length; i++ ) {
      let wordLength = words[i].length
      if (wordLength > longestLength ) {
        longestLength = wordLength;
      }
    }
    return longestLength;
};
// *********************************************************************************************************************************************************************************************

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//
const filterLongWords = function ( words, longerThan ) {
  let output = [];

  for ( let i = 0; i < words.length; i++ ) {
    if (words[i].length >= longerThan ) {
      output.push( words[i] );
    }
  }

  return output;
}
// *********************************************************************************************************************************************************************************************
// js-homework-3.md
// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
const lettersOrigin = ["f", "o", "x"];
const guessedLetters = [];
const guessedLetter = function(letter){
//check if letter is in "lettersOrigin" array
for (let i = 0; i < lettersOrigin.length; i++) {
//if it there, push it to guessedLetters array
  if(letter===lettersOrigin[i]){
    guessedLetters.push(letter);
  }
}
console.log(`You have guessed these letters so far: ${guessedLetters}`);
}
guessedLetter("r");
guessedLetter("f");
// *********************************************************************************************************************************************************************************************
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

/
const lettersOrigin = ["f", "o", "x"];
const guessedLetters = [];
const guessedLetter = function(letter){
  for (let i = 0; i < lettersOrigin.length; i++) {
    if(letter===lettersOrigin[i]){
      guessedLetters.push(letter);
    }
  }
  console.log(`You have guessed these letters so far: ${guessedLetters}`);
}
guessedLetter("r"); // ___
guessedLetter("f"); // f__

// *********************************************************************************************************************************************************************************************
// *********************************************************************************************************************************************************************************************
// *********************************************************************************************************************************************************************************************
// Working with Arrays
// Starting with an empty array called rainbowColors:
//
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"
// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
const rainbowColors = [];
console.log(rainbowColors);
rainbowColors.push("orange");
console.log(rainbowColors);
rainbowColors.unshift("red");
console.log(rainbowColors);
rainbowColors.push("yellow");
console.log(rainbowColors);
rainbowColors.push("green", "blue", "indigo", "violet");
console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("blue"));
const twoColors = rainbowColors.slice(1,3);
console.log(twoColors);

// *********************************************************************************************************************************************************************************************

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)

const nums = [0,1,1,2,3,3,4,5,5,6,7,7,9,3,6];
for (let i = 0; i < nums.length; i++) {
  if (nums[i]===nums[i+1]){
  const newArr =   nums.splice(nums[i], 1);
    console.log(newArr);
  }
  // *********************************************************************************************************************************************************************************************
// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);
console.log(arrOfArrs[1]);
const innerSecondArray = arrOfArrs[1];
console.log(innerSecondArray);
for (var i = innerSecondArray.length-1; i >=0; i--) {
  console.log('!!!', innerSecondArray[i]);
}
// *********************************************************************************************************************************************************************************************

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//
const top5Books = ["Martian's Chronicles", "100 years of Solitude", "1984", "Doctor Zhivago", "Haarry Potter and the Order of phoenix"];
for (let i = 0; i < top5Books.length; i++) {
  if(i===0){
    console.log(`My ${i+1}st choice of Books is ${top5Books[i]}`);
  }
  if(i===1){
    console.log(`My ${i+1}nd choice of Books is ${top5Books[i]}`);
  }
  if(i===2){
    console.log(`My ${i+1}rd choice of Books is ${top5Books[i]}`);
  }
  if(i>=3){
    console.log(`My ${i+1}th choice of Books is ${top5Books[i]}`);
  }

}
