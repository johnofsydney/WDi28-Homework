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

const rainbowColors = []
rainbowColors.push('orange')
rainbowColors.unshift('red')
rainbowColors.push('yellow')
rainbowColors.push('green', 'blue', 'indigo', 'violet')

console.log(rainbowColors)
console.log(rainbowColors.length)
console.log(rainbowColors[1])
console.log(rainbowColors[rainbowColors.length - 1])
console.log(rainbowColors.indexOf('blue'))

const twoColors = rainbowColors.slice(1, 3)
console.log(twoColors)



const favColors = ['r', 'g', 'b', 'y', 'p']
var first = ['1st', '2nd', '3rd', '4th', '5th']
for (i = 0; i < favColors.length; i++) {
  console.log(`${favColors[i]} is my  ${first[i]} favorite`)
}

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num3) {
    return num2
  } else {
    return num3
  }
}
const vowel = function(str) {
  var count = 0
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
      count += 1
      return true
    } else {
      return false
    }
  }
}
const sumArray = function(num) {
  console.log(num.reduce((a, b) => a + b, 0))
}
const multiplyArray = function(num) {
  console.log(num.reduce(function(a, b) {
    return a * b;
  }))
}

const reverseString = function(str) {
  newStr = str.split("").reverse().join("")
  console.log(newStr)
}
const findLongestWord = function(str) {

  var big = str[0]
  for (i = 0; i < str.length; i++) {
    if (str[i].length > big.length) {
      big = str[i]
    }
  }
  console.log(big)
}

const filterLongWords = function(str, num) {
  var count = 0
  for (i = 0; i < str.length; i++) {
    if (str[i].length > num) {
      count = count + 1
    }
  }
  console.log(count)
}

const lettersOfWord = ['y', 'e', 's', 'g']
const guessedLetters = []
const correctLetters = []
const wrongLetters = []
const wrongLetters2 = []
var rewardAmount = 0
var randomNumber = Math.floor(Math.random() * 100);
var hangman = 0

const guessLetter = function(letter) {
const check = lettersOfWord.indexOf(letter)
console.log(check)
if (guessedLetters.length > 0 && guessedLetters.indexOf(letter) >= 0) {
    console.log('sorry you have used this letter before')
    return false
  }

if (check >= 0 ){
  var randomNumber = Math.floor(Math.random() * 100);
  rewardAmount = (rewardAmount + randomNumber)
  correctLetters.push(letter)
  console.log(`correct you won ${randomNumber} dollars you now have ${rewardAmount} dollars`)
  console.log(rewardAmount)
  guessedLetters.push(letter)
  console.log(` your guessed letters are ${guessedLetters}`)
}
else {
  var randomNumber = Math.floor(Math.random() * 100);
  wrongLetters2.push(letter)
  rewardAmount = (rewardAmount - randomNumber)
  guessedLetters.push(letter)
  console.log(`wrong letter you lost ${randomNumber} you have ${rewardAmount}`)
  console.log(guessedLetters)
  hangman = hangman + 1
  console.log(`hangman is at ${hangman}`)
}

if ( hangman === 6  ){
  console.log('you loose')
  console.log(`%c ________________________________________
  < mooooooooooooooooooooooooooooooooooooo >
   ----------------------------------------
   _________
  |         |
  |         0
  |        /|\
  |        / \
  |
  |
  ||     ||`, "font-family:monospace")
}
}
