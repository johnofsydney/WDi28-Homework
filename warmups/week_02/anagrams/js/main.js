console.log("connected");

// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

// let wordArray = ["enlists", "google", "inlets", "banana"]


const anagrammer = function(word, wordArray) {
  let matches = 0;

  for (let testWord of wordArray) {
    if ( word.split('').sort().join('') === testWord.split('').sort().join('') ) {
      console.log(`${testWord} is an anagram of ${word}`);
      matches ++

    }

    if (matches === 0) {
      console.log(`there were no matches of ${word} in ${wordArray}`);
    }
  }


}

anagrammer("listens", ["enlists", "google", "inlets", "banana"])
anagrammer("listen", ["enlists", "google", "inlets", "banana"])
anagrammer("John", ["enlists", "google", "inlets", "banana"])
anagrammer("assembly", ["enlists", "google", "inlets", "banana"])
