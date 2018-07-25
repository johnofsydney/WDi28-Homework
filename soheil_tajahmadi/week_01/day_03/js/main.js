console.log('JS file running!');

let rainbowColors = [];
rainbowColors.push('Orange');
rainbowColors.unshift('Red');
rainbowColors.push('Yellow');
rainbowColors = rainbowColors.concat(['Green','Blue','Indigo','Violet']);
console.log(`The length of the array is ${rainbowColors.length}`)

console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);

console.log(rainbowColors.indexOf('Blue'));

//pick the two colors indexed 1 and 2 from rainbowColors
let twoColors = rainbowColors.slice(1,3);


var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,3);
console.log(nums);

//printing the first item of an array within an array
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);

//printing out the last item in the last array of an array to make it dynamic
console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1]);


//printing out the values in the second array dynamically
for (i = 0; i < arrOfArrs[arrOfArrs.length-1].length ; i++) {
  console.log(arrOfArrs[arrOfArrs.length-1][i]);
}


//printing out the favorite movies by their rank based on their Index
favMovies = ["Pulp fiction", "Incredibles" , "Baby driver" ,"A few good men", "The matrix"];
for (let i=0; i < favMovies.length; i++) {
  console.log(`My #${i+1} choice is ${favMovies[i]} `);
}

//function returning the bigger number as result
const maxOfTwoNumbers = function(num1,num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
};


////function returning the bigger number from a set of 3 maxOfTwoNumbers

const maxOfThree = function(num1, num2, num3) {
  return maxOfTwoNumbers(num1,maxOfTwoNumbers(num2,num3));
};

//a function to add all the values in an array and return the value
const sumArray = function(array) {
  let sum = 0;
  console.log(array.length);
  for (i = 0; i < array.length ; i++) {
    sum += array[i];
  }
  return sum;
}

// a function that multiplies all the values in in sumArray

const multiplyArray = function(array) {
  let result = 1;
  console.log(array.length);
  for (i = 0; i < array.length ; i++) {
    result *= array[i];
  }
  return result;
}

//a function that reverses the input string
const reverseString = function(string) {
  let result = "";
  for (i = 0; i < string.length; i++) {
    result += string[string.length-i-1];
  }
  return result;
}

// a function to return the longest word in an array of words

const findLongestWord = function(array) {
  let result = '';
  for (i = 0; i < array.length ; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result.length;
}


//a function that returns the words with a length longer than parameter wordLength in an array
const filterLongWords = function (array, wordLength) {
  let result = [];
  for (i = 0; i < array.length ; i++) {

    if (array[i].length > wordLength) {
      result.push(array[i]);
    }
  }
  return result;
}

//The word guessing game

const arrayEquality = function (array1,array2) {
  if (array1.length !== array2.length) {
    // console.log('array length mismatch')
    return false;
  }
  for (i = 0; i < array1.length ; i++) {

      if (array1[i] !== array2[i]) {
        // console.log(`item mismatch ${array1[i]} and ${array2[i]}`  )
        return false;
      }
  }
  // console.log('we survived the comparison')
  return true;
  }


let magicWord = ['B','L','O','B'];
let guessWord = ['_','_','_','_'];

const guessLetter = function(letter) {

  letter = letter.toUpperCase();
  let iterateWord = guessWord.slice(0);
  for (i = 0; i < magicWord.length; i++) {
      // console.log("the guessWord is " + guessWord + i);
    if (magicWord[i] == letter ) {
      iterateWord[i] = magicWord[i];
      // console.log("the iterateWord is " + iterateWord + i);

      // console.log("the guessWord is " + guessWord + i);
    }
  }
  if (!arrayEquality(iterateWord,guessWord)) {
    console.log('Congratz! that letter exists in this word!');
    guessWord = iterateWord.slice(0);
    console.log(`what you have guessed so far is ${guessWord}`);

  }
  if (arrayEquality(magicWord,guessWord)) {
    console.log('Congratulations! you have completed this game!');
  } else {
    console.log('keep guessing!');

  }
}
