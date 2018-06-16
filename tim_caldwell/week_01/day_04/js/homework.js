// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function ( a, b ) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function ( a, b, c ) {
  if ( a > b && a > c ) {
    return a;
  } else if ( b > c ) {
    return b;
  } else {
    return c;
  }
};


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function ( char ) {
  switch ( char ) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function ( arr ) {
  // // quick way using reduce
  // return arr.reduce(function ( sum, current ) { return sum + current; }, 0);

  // long way using for Loop -- but less confusing unless you prebuild the funciton.
  let sum = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  }

  return sum;
}

const multiplyArray = function ( arr ) {
  // // quick way using reduce
  // return arr.reduce(function ( sum, current ) { return sum *= current; }, 0);

  // long way using for Loop -- but less confusing unless you prebuild the funciton.
  let sum = arr[0];
  for ( let i = 1; i < arr.length; i++ ) {
    sum *= arr[i];
  }

  return sum;
}


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function ( str ) {
  let reverseString = '';

  // iterate through array backwards. --i stubtracts one from i first before evaluating
  for( let i = str.length - 1; i >= 0; --i) {
    reverseString += str[i];
  }

  return reverseString;
}


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function ( words ) { //words expects an array
    let longestLength = 0;

    for ( let i = 0; i < words.length; i++ ) {
      let wordLength = words[i].length
      if (wordLength > longestLength ) {
        longestLength = wordLength;
      }
    }

    return longestLength;
};

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function ( words, longerThan ) {
  let output = [];

  for ( let i = 0; i < words.length; i++ ) {
    if (words[i].length >= longerThan ) {
      output.push( words[i] );
    }
  }

  return output;
}


////////////////////////////////////////////////////////////////////////////////
//  js-homework-3.md
// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
  const wordLetters = ['F','O','X']

  let reward = 0;
  let totalGuessed = 0;
  let lettersToHang = 0;
  let guessesMade = ''
  const requiredToHang = 6;

  // dynamically build guessed letters to be the same length as the word.
  let guessedLetters = [];
  for (let i = 0; i < wordLetters.length; i++ ) {
    guessedLetters.push('_');
  }

// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
const isHanged = function ( correctGuess ) {
  // increment/decrement guesses counter
  if ( correctGuess ) { //correctGuess is a number, if 0 will decrement.
    lettersToHang--;
  } else {
    lettersToHang++;
  }

  console.log( `You've made ${ lettersToHang } guesses.` );

  // Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
  if ( lettersToHang === requiredToHang ) {
    return true;
  } else {
    return false;
  }
};


// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
const guessLetter = function ( guess ) {
  // Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
  if (guessesMade.indexOf(guess) > -1) {
    console.log( `You've already tried ${ guess.toUpperCase() }!`);
    return;
  }

  guessesMade += guess
  let numFound = 0;

  // Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
  let newReward = Math.floor(Math.random() * 10 + 1) * 500 //math.random returns between 0 & 1, * $1000 for effect, rounded to nearest $100

  // Iterate through the word letters and see if the guessed letter is in there.
  for ( let i = 0; i < wordLetters.length; i++ ) {
    if ( guess.toUpperCase() === wordLetters[i].toUpperCase() ) {
      guessedLetters[i] = wordLetters[i]; //use this to keep same case as source word
      numFound++;
    }
  }

  // Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
  if ( isHanged( numFound ) ) {
    console.log( `You are hanged! Game over!`);
    return;
  }  else { // still in the game!
    totalGuessed += numFound; // add the amount found with this guess into our total

    // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
    if ( numFound > 0 ) {
      console.log( `Congratulations, you uncovered ${ numFound } letters with that guess!` );
      console.log( `You won $${ newReward * numFound }!` );
      reward += newReward * numFound;
    }
    else {
      console.log( `Sorry, ${ guess } isn't in the word!` );
      console.log( `You lost $${ newReward }!` );
      reward -= newReward;
      if (reward < 0) { //dont want them going into negative!
        reward = 0;
      }
    }

    // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
    if ( totalGuessed === wordLetters.length ) { // when totalGuessed === wordLetters.length, all letters were guessed
      console.log( `Congratulations, you got it! The word was ${ wordLetters }`);
    } else {
      console.log( guessedLetters );
    }

    console.log( `Your current prize is ${ reward }`)
  }
}



// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0

// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
