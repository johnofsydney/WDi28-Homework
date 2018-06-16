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
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third


let rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[6]);

let n = rainbowColors.indexOf("blue");
console.log(n);
//accesing an array through for loop
let twoColors = rainbowColors.slice(1, 3);
console.log(twoColors);
//  let removeDuplicates = function(input) {
//
//     let  hashObject = new Object();
//
//     for (let i = input.length - 1; i >= 0; i--) {
//         let currentItem = input[i];
//
//         if (hashObject[currentItem] == true) {
//             input.splice(i, 1);
//         }
//
//         hashObject[currentItem] = true;
//     }
//     return input;
// }
//
// console.log(removeDuplicates(rainbowColors));



let nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
let removeDuplicates = function(input) {

  let hashObject = new Object();

  for (let i = input.length - 1; i >= 0; i--) {
    let currentItem = input[i];

    if (hashObject[currentItem] == true) {
      input.splice(i, 1);
    }

    hashObject[currentItem] = true;
  }
  return input;
}

console.log(removeDuplicates(nums));




let arrOfArrs = [
  ["inner array first item", "inner array second item"],
  ["first", "second", "third"]
];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);


// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".


let choices = ["Impressions of Africa", "Life a user's manual", "Naked Lunch", "Fathers and Sons"];
for (let i = 0; i < choices.length; i++) {
  console.log(`My # ${(i + 1)} choice is ${choices[i]}`);
}

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

for (let i = 0; i < choices.length; i++) {
  let choiceNum = i + 1;
  let choiceNumSuffix;
  if (choiceNum == 1) {
    choiceNumSuffix = 'st';
  } else if (choiceNum == 2) {
    choiceNumSuffix = 'nd';
  } else if (choiceNum == 3) {
    choiceNumSuffix = 'rd';
  } else {
    choiceNumSuffix = 'th';
  }
  console.log(`My ${choiceNum} ${choiceNumSuffix} choice is ${choices[i]}`);
}

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


let maxOfTwoNumbers = function ( a, b ) {
  if ( a > b ) {
    console.log( a + " is the bigger number");
  } else {
    console.log( b + " is the biggest number");
  }
};
maxOfTwoNumbers( 14, 10);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let maxOfThree = function ( a, b, c ) {
  if ( a >= b && a >= c ) {
    console.log( a );
  } else if ( b >= a && b >= c ) {
    console.log( b );
  } else {
    console.log( c );
  }
};

maxOfThree( 1, 5, 2);


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

let vowelExam = function ( vowel ) {
  if ( vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ) {
    console.log( true );
  } else {
    console.log( false );
  }
};

vowelExam( "i" );
vowelExam( "c" );


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let arrayOfNumbers = [1, 2, 3, 4, 5];

let result = 0;
let sumArray = function (array) {

  for (let i = 0; i < array.length; i ++) {
     result += array[i];
  }
  return result;
};

console.log(sumArray(arrayOfNumbers));

//multiplayArray

let numbers = [1, 2, 3, 4, 5];

let total = 1;
let multiplyArray = function (arr) {

  for (let i = 0; i < arr.length; i ++) {
     total = total * arr[i];
  }
  return total;
};

console.log(multiplyArray(numbers));

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
let reverseString = function (str) {
    let split = str.split('');
    let reverse = split.reverse()
    let join = reverse.join('');
    return join;

}


// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let word = ["T", "A", "C", "O"];
let guessed = ["_", "_", "_", "_"];

let guessLetter = function (c) {
    let isCorrectGuess = false;
    let isFinished = false;
    for (let i = 0; i < word.length; i++) {
        if(word[i] === c) {
            guessed[i] = c;
            isCorrectGuess = true;
        }
        if(guessed[i] === '_') {
            isFinished = true;
        }
    }
    if(isCorrectGuess === true){
        console.log("You found a letter.", "\n", guessed.join(''));
        if(isFinished === false) {
            console.log("You win.");
        }
    } else {
        console.log("Incorrect guess.");
    }
}
 console.log(guessLetter("T"));
 console.log(guessLetter("A"));
 console.log(guessLetter("R"));
