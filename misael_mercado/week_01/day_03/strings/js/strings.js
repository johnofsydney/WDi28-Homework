// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//  DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (amount) {
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`;
  } else {
    return `${amount} dollars`;
  }
}
let EvilMoney = DrEvil(1000000);
console.log(EvilMoney)

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);
}

console.log(mixUp("Moon", "Carrussel"));
console.log(mixUp("Chimpanzee", "National"));

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function (word){

	var firstLetter = word[0];
	var newWord = word.slice(1);

	var newestWord = newWord.split(firstLetter).join("*");

	console.log(word[0] + newestWord);

}

fixStart("babble");

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (anotherWord) {
  if (anotherWord.length >= 3 && anotherWord.slice(-3) != "ing") {
		return anotherWord + "ing";} else if
		(anotherWord.length >= 3 && anotherWord.slice(-3) === "ing") {
		return anotherWord + "ly"; } else if
		(anotherWord.length <= 3) {
		return anotherWord;
	    }

  }
  console.log(verbing("go"));
  console.log(verbing("jumping"));
  console.log(verbing("smok"))


  // Create a function called notBad that takes a single argument, a string.
  //
  // It should find the first appearance of the substring 'not' and 'bad'.
  // If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
  // If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
  // For example:
  //
  //   notBad('This dinner is not that bad!'): 'This dinner is good!'
  //   notBad('This movie is not so bad!'): 'This movie is good!'
  //   notBad('This dinner is bad!'): 'This dinner is bad!'

  const notBad = function(string){
	var not = string.search("not");
	var bad = string.search("bad");
	if (not < bad && not > 0){
		word1 = string.substring(not, (not+3));
		word2 = "good"
		sentence = string.slice(0, not);
		return sentence + word2 + "!";
	} else {
		string = string;
		return string;
	}
}

console.log(notBad("The movie is not too bad!"));
console.log(notBad("That hotel is quite bad!"));
console.log(notBad('this excercice is really bad!'));
console.log(notBad("My bank account is not bad!"));
