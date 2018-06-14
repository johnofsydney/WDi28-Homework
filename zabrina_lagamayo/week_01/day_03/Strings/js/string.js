/*
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
except it will add '(pinky)' at the end if the amount is 1 million
*/
const drEvil = function (amount) {
  const dollar = `${amount} dollars`;
  if (amount === "1 million") {
    console.log(`${dollar} (pinky)`);
  }  else {
    console.log(dollar);
  };
};
drEvil('1 million');

/*
Create a function called mixUp. It should take in two strings, and return the concatenation
of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long.
*/
const mixUp = function (name1, name2) {
  const name1SlicedSwapped = name1.slice(0,2)+ name2.slice(2);
  const name2SlicedSwapped = name2.slice(0,2) + name1.slice(2);
  console.log(name2SlicedSwapped + " " + name1SlicedSwapped);
};

mixUp('dog', 'dinner');

/*
Create a function called fixStart. It should take a single argument, a string, and
return a version where all occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long. For example:
*/

const fixStart = function (string) {
  const firstLetter = string[0];
  const stringReplace = string.replace(new RegExp(firstLetter, 'g'), '*');
  const replaced = stringReplace.replace(['*'], firstLetter);
  console.log(replaced);
};


fixStart('bubbly');

/*
Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged. For example:
*/

const verbing = function (string) {
    const stringIng = `${string}ing`;
    const lastThree = string.substr(string.length - 3);
    const lastThreeIng = lastThree === 'ing';
    const addIng = `${string}ing`
    const addLy = `${string}ly`
    if (string.length >= 3 && !lastThreeIng) {
    console.log(addIng);
  } else if (string.length >= 3 && lastThreeIng){
    console.log(addLy);
  } else{
    console.log(string);
  }
};
verbing('go');

/*

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
*/

const notBad = function (string) {
  const not = /not/g;
  const bad = /bad/g;
  const notIndex = string.search(not);
  const badIndex = string.search(bad);
  console.log(badIndex);
  const indexDiff = Math.abs(badIndex - notIndex);
  const isPositive = Math.sign(indexDiff);
  const notPositive = Math.sign(notIndex);
  const badPositive = Math.sign(badIndex);
  console.log(badPositive);
  if(isPositive === 1 && notPositive === 1 && badPositive === 1) {
    const stringArray = string.split(" ");
    const badIndexArray = stringArray.indexOf('bad');
    const notIndexArray = stringArray.indexOf('not');
    stringArray.splice(notIndexArray,3,'good');
    console.log(stringArray.join(' '));
  } else {
    console.log(string);
  }


};
notBad("it's really not that bad");
