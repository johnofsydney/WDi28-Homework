
// Split word1 to charecters arrays
//change each charecters to "_"
// check input charecters with each characters array if it's same. if same show charecters
// if not the same, no action.
// compared

let word1 = "test"
let word2 = "me"

const guessLetter = function (input) {
debugger;
//  for (i = 0 ; i <word1.length; i++) {
    const splitInput = input.split("");
    const splitWord1 = word1.split("");
    for (var i = 0; i < input.length; i++) {
      if (splitInput[i] === word1[i]){
        splitInput[i] = word1[i];
      }
    }
console.log(splitInput[i].split(""));
  };
guessLetter("test");


const




// let word = "overpopulation"
// var chars = word.split('');
//
// const fixStart = function (str) {
//   const splitter = str.split("");
//   for (var i = 1 ; i < str.length; i++) {
//       if (splitter[i] === str[0]) {
//         splitter[i] = "*" ;
//       }
//   }
//  const result = splitter.join("");
//  console.log(result);
// };
//
//  fixStart("babble");
