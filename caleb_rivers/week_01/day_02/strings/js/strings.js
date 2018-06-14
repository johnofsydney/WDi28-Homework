//Dr Evil

const drEvil = function (number) {
  if (number === 1000000) {
    console.log(`${number} dollars. (pinky)`)
  } else {
    console.log(`${number} dollars.`)
  }
  return number;
}

//Mix up

const mixUp = function (word1, word2) {
  const firstPart = word1.substring(0,2);
  const secondPart = word2.substring(0,2);
  const firstWordSecond = word1.substring(2);
  const secondWordSecond = word2.substring(2);
  const msg = `${firstPart}${secondWordSecond} ${secondPart}${firstWordSecond}`;
  console.log(msg);
}

mixUp("lollie", "giggle");

//Fixstart
const fixStart = function (word) {
  const letter = word[0];
  const string = word.replace(letter, "*");
  console.log(string);
}

fixStart("babble");


/*Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:*/

const verbing = function (word) {
  const ending = word.endsWith("ing");

  console.log(ending);
}

verbing("swimming");
