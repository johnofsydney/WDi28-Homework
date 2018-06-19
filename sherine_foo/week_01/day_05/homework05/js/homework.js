console.log("Homework05");

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectA = {
  long : 4,
  wid  : 8,
  };

const isSquare = function () {      //  return ( recA.long === recA.wid);
  if (rectA.long === rectA.wid) {
    return true;
  } else {
    return false;
  }
};
console.log(`It is a Square? ${isSquare(rectA)}`);

const area = rectA.long * rectA.wid;
console.log(`area = ${area}`);

const perimeter = (rectA.long * 2) + (rectA.wid * 2);
console.log (`perimeter = ${perimeter}`);


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 3,
  sideC: 4
};

const isEquilateral = function () {
  return (triangleA.sideA === triangleA.sideB === triangleA.sideC)
};

console.log(`Is it equilateral? ${isEquilateral(triangleA)}`);

const isIsosceles = function () {
  return (triangleA.sideA === triangleA.sideB || triangleA.sideA === triangleA.sideC ||triangleA.sideB === triangleA.sideC )
};

console.log(`Is it osceles ? ${isIsosceles(triangleA)}`);

const s = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
const areaT = Math.sqrt(s * (s - triangleA.sideA) * (s - triangleA.sideB) * (s - triangleA.sideC));
console.log(`area = ${areaT}`);


const isObtuse = function () {
  if ((Math.pow(triangleA.sideC, 2) / 2) <  (Math.pow(triangleA.sideA, 2) + Math.pow(triangleA.sideB, 2)) < Math.pow(triangleA.sideC, 2)) {
    return true;
  }
};

console.log(`Is it Obtuse ? ${isObtuse(triangleA)}`);
//come back on isObtuse, not quite right.


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

 let a = Object.values(cartForParty);

 const sumArray = function(list) {
  let result = 0 ;
 for ( var i = 0; i < a.length; i++) {
   result += Number(a[i]);
 }
   //return result ;
   //console.log(result);
 return result;
};
 console.log(`You have spend ${sumArray()}`);


// let result = 0;
// for (let i of a) {
//   result += Number(a[i]);
//
// };
// ???????? not sure how to use " for of" and " for in"


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
//
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

const validateCC = function (cardNumb) {

  cardNumb = cardNumb.replace(/-/g, "");
  //console.log(cardNumb);

  if (cardNumb.length !== 16) {
    return false;
  }
  if (isNaN(cardNumb)) {
    return false;
  }
  if ( (cardNumb[15]) % 2 !== 0) {
    return false;
  }

  //const cardDigit = cardNumb.split('');
  let sum = 0;
  for (var i = 0; i < cardNumb.length; i++) {
    sum += +cardNumb[i];

  }
  return sum; //return sum; // why i need to use return? else the result is unidentify but sum show as result instead
// Error, result stop here when it fufil all and above status.
  if (sum < 17) {
    return false;
  }

  let allSameNumb = true;
  for (var i = 0; i < cardNumb.length; i++) {
    if ( cardNumb[i] === cardNumb[0] ) {
      allSameNumb = true;
      return false;
    }

  }
return true;
};


  // run test cases ...

  let testCases = [
    "9999-9999-8888-0000",
    "6666-6666-6666-1666",
    "a923-3211-9c01-1112",
    "4444-4444-4444-4444",
    "1111-1111-1111-1110",
    "6666-6666-6666-6661"
  ]

for (var i = 0; i < testCases.length; i++) {
  console.log( testCases[i], validateCC(testCases[i]));
}
