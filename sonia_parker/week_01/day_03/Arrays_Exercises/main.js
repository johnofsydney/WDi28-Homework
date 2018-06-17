console.log("connected");
const rainbowColors = [];
console.log(rainbowColors);
//add orange to the end of the array
rainbowColors.push("orange");
console.log(rainbowColors);
//add red to the start of the Array
rainbowColors.unshift("red");
console.log(rainbowColors);
//add yellow to the end
rainbowColors.push("yellow");
console.log(rainbowColors);
//
rainbowColors.push("green", "blue", "indigo", "violet");
console.log(rainbowColors);
//log out the length of array
console.log(rainbowColors.length);
//log out the second item of the Array
console.log(rainbowColors[1]);
//log out the last item of the Array
console.log(rainbowColors[rainbowColors.length-1]);
//log out the index of string "blue"
console.log(rainbowColors.indexOf("blue"));
//create twoColors array using slice method
const twoColors = rainbowColors.slice(1,3);
console.log(twoColors);
//remove duplicates with splice
const nums = [0,1,1,2,3,3,4,5,5,6,7,7,9,3,6];

for (let i = 0; i < nums.length; i++) {
  //compare nums[i] to nums[i+1]
  //if they match,
  if (nums[i]===nums[i+1]){
  const newArr =   nums.splice(nums[i], 1);
    console.log(newArr);
  }
}
//work with array of Arrays
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
//print out inner array first item
console.log(arrOfArrs[0][0]);
//printout third using dynamic index
console.log(arrOfArrs[1][2]);
//loop through second inner array and print out all of it items from first to third (reverse)
console.log(arrOfArrs[1]);//second inner array
const innerSecondArray = arrOfArrs[1];
console.log(innerSecondArray);//second inner array
for (var i = innerSecondArray.length-1; i >=0; i--) {
  console.log('!!!', innerSecondArray[i]);
}
//topchoice
const top5Books = ["Martian's Chronicles", "100 years of Solitude", "1984", "Doctor Zhivago", "Haarry Potter and the Order of phoenix"];
for (let i = 0; i < top5Books.length; i++) {
  if(i===0){
    console.log(`My ${i+1}st choice of Books is ${top5Books[i]}`);
  }
  if(i===1){
    console.log(`My ${i+1}nd choice of Books is ${top5Books[i]}`);
  }
  if(i===2){
    console.log(`My ${i+1}rd choice of Books is ${top5Books[i]}`);

  }
  if(i>=3){
    console.log(`My ${i+1}th choice of Books is ${top5Books[i]}`);
  }

}
//Array and Functions Bonus Material
const maxOfTwoNumbers = function(num1, num2){
  if(num1>num2){
    let largest = num1;
    return largest;
  }else
  largest = num2;
  return largest;
}
console.log(maxOfTwoNumbers(100, 50));
console.log(maxOfTwoNumbers(20, 70));
//maxofThree
const maxOfThree = function(num1, num2, num3){
  //check num1 agaist num2 and num3,if evaluates to false then num2 or nu3 are largest
  if(num1>num2 && num1>num3){

    return num1;
  }

   // if(num2>num3){
   //   return num2;
   // }

  //return num3;

  if(num2>num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log( maxOfThree(1,2,3));
console.log( maxOfThree(7,673,100));
console.log( maxOfThree(357,9,53));
//true if its a vowel

const isVowel = function(char){
  //return true if its a vowel,false otherwise

  return(char=="a"|| char=="e"||char=="o"||char=="u"||char=="i")


}
console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("i"));
console.log(isVowel("c"));

//sumArray
const sumArray = function(arr){
let sum=0;
for (let i = 0; i < arr.length; i++) {
  sum+=arr[i];
}
  return sum;
}
console.log (sumArray([1,2,3,4]));
console.log (sumArray([9,67,28,10]));
console.log (sumArray([0,43,15,95]));

//multiplyArray
const multiplyArray = function(arr){
  let multiple = arr[0];
  for (let i = 1; i < arr.length; i++) {
    multiple*=arr[i];
  }
    return multiple;
}
console.log (multiplyArray([1,2,3,4]));
console.log (multiplyArray([9,67,28,10]));
console.log (multiplyArray([2,43,15,95]));

//reverseString
const reverseString = function(str){
  const arrayForward = str.split("");
  let arrayReverse = [];
//  console.log(arrayForward);
  for (let i = arrayForward.length-1; i >= 0; i--) {
     arrayReverse.push(arrayForward[i]);
    // console.log(arrayReverse);
  }

return arrayReverse.join("");

}
console.log(reverseString("beans"));
console.log(reverseString("milk"));
console.log(reverseString("radio"));

//The Word Guesser
const lettersOrigin = ["f", "o", "x"];
const guessedLetters = [];
const guessedLetter = function(letter){
  //check if letter is in "lettersOrigin" array
  for (let i = 0; i < lettersOrigin.length; i++) {
//if it there, push it to guessedLetters array
    if(letter===lettersOrigin[i]){
      guessedLetters.push(letter);
    }
  }
  console.log(`You have guessed these letters so far: ${guessedLetters}`);

}
guessedLetter("r"); // ___
guessedLetter("f"); // f__
//console.log(guessedLetter("r"));
//console.log(guessedLetter("f"));
