const rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors[3]);

const twoColors = [rainbowColors.slice(2,4)];

//bonus splicing.
let nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,3);
console.log(nums);


//Array of Arrays
let arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][1]);

for (var i = 0; i < arrOfArrs.length; i++) {
  console.log(arrOfArrs[1][i]);
}

//Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

let dogs = ["German Shepherd" , "Kelpie" , "Australian Bulldog"];

for (let i = 0 ; i < dogs.length ; i++) {
  console.log(`One of my favourite dogs are : ${dogs[i]}`);
}

console.log("--------------------------------------");

//max of two numbers

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(`The greatest number is ${maxOfTwoNumbers(4,98)}`)

// max of three
const maxOfThreeNumbers = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  if (num2 > num1 && num2 > num3 ) {
    return num2;
  } else {
    return num3;
  }

}

console.log(`The greatest of the three numbers is ${maxOfThreeNumbers(43,55,2)}`);

//vowel function

const vowel = function (letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return true;
  } else {
    return false;
  }
}

console.log (`Is the letter a vowel? ${vowel("l")}`);

 //sumarray

 const sumArray = function (array) {
   let total = 0;
   for (let i = 0; i < array.length; i++) {
     total = total + array[i];
   }
   console.log(`The total is ${total}.`)
 }

 sumArray([2,3,5,3,4]);

 const multiplyArray = function (array) {
   let total = 1;
   for (let i = 0; i < array.length; i++) {
     total = total * array[i];
   }
   console.log(`The total is ${total}.`)
 }

 multiplyArray([1,2,3,4]);
