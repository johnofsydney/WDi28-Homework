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

let rainbowColours = [];

rainbowColours.push("orange");
rainbowColours.unshift("red");
rainbowColours.push("yellow");
rainbowColours.push("green", "blue", "indigo", "violet");

console.log(rainbowColours.length);
console.log(rainbowColours[1]);
console.log(rainbowColours[rainbowColours.length - 1]);

let index = rainbowColours.indexOf("blue");
console.log(index);

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the
// rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];,
// remove the duplicates destructively using slice or splice (whichever one is appropriate)

let twoColours = rainbowColours.slice(1, 3); //does not impact original array
console.log(twoColours);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      nums.splice(i,1);
    } if (nums[i] === 3) {
      nums.splice(i,1);
    }
  };

console.log(nums);

//slice needs to accept two arguments (start and end). It will return a new array containing the
// elements from the given start index up the one right before the specified end index

// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item",
// "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
  let newArray = arrOfArrs[0][0];
    console.log(newArray);

// Print "third" by using a dynamic index *** NOT DONE YET
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third *** NOT DONE YET

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
//picking the right suffix for the number based on what it is.

const colours = ["yellow", "pink", "blue", "red", "purple"];

for (i = colours.length - 1; i >= 0; i--) {
  console.log("My #" + (i + 1) + ` choice is ${colours[i]}`);
}; //decided to try a backwards loop too just to see outcome

for (i = 0; i < colours.length; i++) {
  console.log("My #" + (i + 1) + ` choice is ${colours[i]}`);
};

for (i = 0; i < colours.length; i++) {
  const num = (i + 1);
   let numSuf = "";
    if (num === 1) {
        numSuf = "st";
    } else if (num === 2) {
        numSuf = "nd";
    } else if (num === 3) {
        numSuf = "rd";
    } else {
        numSuf = "th";
  }
    console.log(`My ${num}${numSuf} choice is ${colours[i]}`)
};

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    }
};

console.log(maxOfTwoNumbers(58, 60));

const maxOfThree = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else if (num3 > num1 && num3 > num2) {
      return num3;
    }
};
console.log(maxOfThree(3, 5, 19));

const TrueOrFalse = function(letter) {
   if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
       return true;
     } else {
       return false;
    }
};
console.log(TrueOrFalse("i"));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all
// the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(array) {
  let sum = 0; //empty array to store result
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i]; //everytime loop runs, it uses this formular to add to sum variable
  }
  return sum;
};

console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array) {
  let multiple = 1;
  for (i = 0; i < array.length; i++) {
    multiple = multiple * array[i];
  }
  return multiple;
}
console.log(multiplyArray([1,2,3,4]));

// Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
  const newString = string.split(""); //splits the string into individual string characters
  const reverse = newString.reverse(); //reverses the individual string characters
  const join = reverse.join(""); //join them back together!
  return join;
}
// can also use array to split the array, push the reversed characters back into the array
console.log(reverseString("hello"));
console.log(reverseString("hello mother"));

// Write a function findLongestWord that takes an array of words and returns the length
//of the longest one.

const findLongestWord = function(str) {
  let longest = "";
  for (i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i].length;
    }
  }
  return longest;
};

console.log(findLongestWord(["shelley", "is", "the", "best"]));

// Write a function filterLongWords that takes an array of words and an number i
//and returns the array of words that are longer than i.

// Homework: The Word Guesser
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
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

let word = "FOX".split("")

let guessedWord = []

for (var i = 0; i < word.length; i++) {
  guessWord[i] = "-"
}

const guessLetter = function(letter) {
  let index = word.indexOf(letter)

  if (index >= 0) {
    guessWord[index] = guessLetter
    console.log("good guess");
  } else {
    console.log("bad guess");
  }

  if (word.join("") === guessedWord.join("") {
    console.log("congrats you win!");
  }

//can't check whether one array has the same content as another array.
};
