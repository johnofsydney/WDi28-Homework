//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in
// Javascript. You'll have to remember your pre-work, or do some googling to
// figure this out.
// Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.
// // Define a function sumArray and a function multiplyArray that sums
 // and multiplies (respectively) all the numbers in an array of numbers.
 // For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

 const maxOfTwoNumbers = function (num1, num2){
   if(num1>num2){
     return num1;
   } else {
     return num2;
   }
 };
 const maxOfThree = function (num1, num2, num3){
   return Math.max(num1,num2,num3);
 };
 const char = function(character){
   const vowelList = ['a','e','i','o','u','A','E', 'I', 'O', 'U'];
   for(let i = 0; i<vowelList.length; i++) {
     if (character.length === 1 && vowelList[i]===character) {
       return true;
     } else {
       return false;
     }
   }
 };
 const sumArray = function(input){
   return input.reduce(function(accumulator, currentValue){
     return accumulator + currentValue;
   },0);
 }

 const multiplyArray = function (input) {
   return input.reduce(function(accumulator, currentValue){
     return accumulator * currentValue;
   },1);
 }
