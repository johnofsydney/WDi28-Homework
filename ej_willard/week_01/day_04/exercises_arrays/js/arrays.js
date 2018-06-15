/*Exercises: Arrays
Working with Arrays
Starting with an empty array called rainbowColors: %%%%%%%%

Add "orange" to the end of the array
Add "red" to the start of the array
Add "yellow" to the end
Add "green", "blue", "indigo", and "violet" to the end of the array
Try and do this using one method %%%%%%%%%%%%%%%%%%
Log out the length of the array%%%%%%%%%%%%
Log out the second item %%%%%%%%%%%%%
Log out the last item (make this flexible/dynamic!) %%%%%%%%%
Log out the index of the string "blue" %%%%%%


Bonus: Find out the difference between .slice and .splice
Create an array called twoColors using one method - don't change the rainbowColors array!
 Essentially pull two colors out of the array (say, between the index of 1 and 3)
Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate) %%%%%%%%%%%%%



Bonus: Work with arrays of arrays
Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
Access "inner array first item" and print it out"
Print "third" by using a dynamic index
Bonus Bonus: Loop through the second inner array! Print out first, then second, then third*/

const rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo", "violet");
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
// for (var i = 0; i === rainbowColors.length; i++) {
//   console.log(rainbowColors[i]);
// }

console.log( rainbowColors[0] );

console.log( rainbowColors [rainbowColors.length - 1 ]);

rainbowColors.indexOf("blue");
console.log(rainbowColors.indexOf('blue'));

/// SPLICE AND SLICE
const twoColors = rainbowColors.slice(0 , 2);
console.log(twoColors);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
console.log(nums);
const noDups = nums.splice(3, 4, 6);
console.log(noDups);
console.log(nums);

///// ARRAYS OF ARRAYS

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2])
// const lastArr = arrOfArrs[ arrOfArrs.length - 1 ];
// lastArr[ lastArr.length - 1 ];
// console.log(lastArr.length - 1);


//Bonus Bonus: Loop through the second inner array! Print out first, then second, then third*/
//BONUS BONUS - can't do
for (var i = 0; i < arrOfArrs[1].length; i++) {
  console.log(arrOfArrs[1][i]);
}

/*Your top choices
Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.*/

 const topFiveCities = ['Tokyo', 'Osaka', 'Kyoto', 'Nagano', 'Saitima'];
 for (let i = 0; i < topFiveCities.length; i++) {
 //console.log(`My number ${topFiveCities.indexOf(topFiveCities)} city of choice is ${topFiveCities[i]}`); // this was an attempt at the bonus but didnt work
 console.log(`my # ${(i + 1)} city of choice is ${topFiveCities[i]}.`)
} // here using the index plus 1 to add to the city of choice.
//// second lot of homework - Array and functions bonus material
/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    //return (num1);
    console.log(`${num1} is bigger than ${'num2'}.`);
  } else {
    //return (num2);
    console.log(`${num2} is bigger than ${num1}.`)
  }
};
maxOfTwoNumbers(9, 20);

const maxOfThree = function (num1, num2, num3) {
  return Math.max(22, 7, 2);
}
  console.log(maxOfThree());

  // if (num1 > num2 && num3) {
  //   return num1;
  // } else if (num2 > num1 && num3) { //console is returning '2' - i think this is because it is checking num 2 against num 1 and finding it is bigger so stops checking all the way to num 3
  //   return num2;
  // } else {
  //   return num3;
//  }
//};
//console.log(maxOfThree(1, 2, 3));
//////////////////////////////////////////
/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

const char = function (t1) {
  if (t1 === 'a' | 'e' | 'i' | 'o' | 'u') {
    return 'true';
  } else {
    return 'false';
  }
};
console.log(char('a'));
console.log(char('x'));

/////
/*Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

//const numberArray = [1, 2, 3, 4]; /////CANNOT DO

const sumArray = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length ; i++) {
    //console.log(arr[i]);
    sum = sum + arr[i];
}
  return sum;
};
  console.log(sumArray([1, 2, 3, 4]));

//const multiplyArray = function () { //this needs to multiply

const multiplyArray = function(mArr) {
  let num = 1;
  for (let i = 1; i < mArr.length; i++) {
    num = num * mArr[i];
  }
  return num;
};
  console.log(multiplyArray([1, 2, 3 ,4]));
//};

/*Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".//

const reverseString = function(str) {
const arrayForward = str.split('');
let arrayReverse[];
for (let i = arrayForward.length-1; i >=0; i--) {
arrayReverse.push(arrayForward[i]);
}
return arrayReverse.join("");
}
console.log(reverseString("lollipop"))

Write a function findLongestWord that takes an array of words and returns the length of the longest one.//

Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i. STILL NEED TO DO THESE*/
