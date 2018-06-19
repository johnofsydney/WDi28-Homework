console.log("I am working");

//A function that passes true if the object has a width
//and length of 4

// Given the following a rectangle object like the one below,
// write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

//remember that our parameter is rectangle (a placeholder for our argument rectangleA)
const rectangleA = {
  length: 6,
  width: 8
};

const isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
};

const area = function(rectangle) {
  return rectangle.length * rectangle.width;
};

const perimeter = function(rectangle) {
  return (rectangleA.length + rectangleA.width) * 2;
}

// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 10,
  sideB: 4,
  sideC: 3
};

const isEquilateral = function(tri) {
if (tri.sideA === tri.sideB && tri.sideB === tri.sideC && tri.sideC === tri.sideA) {
  return "triangle is equilateral!";
} else {
  return "triangle is not equilateral!";
}
};

const isIsosceles = function(tri) {
  if (tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideC === tri.sideA) {
    return "this triangle is isosceles";
  } else {
    return "this triangle is not isosceles!";
  }
};

const triArea = function(tri) { //formula is find perimeter then use heron's formula
  let calc = 0.5 * (tri.sideA + tri.sideB + tri.sideC);
  let area = Math.sqrt(calc * (calc - tri.sideA) * (calc - tri.sideB) * (calc - tri.sideC))
  return area;
};

// formula is a^2 + b^2 < c^2 (c is the longest side of the triangle)
const isObtuse = function(tri) {
  let sortSides = [tri.sideA, tri.sideB, tri.sideC];
  sortSides.sort(function(a, b) {  //this sort function will sort the elements in the array from smallest to largest and replace the array
    return a-b;
  });
  console.log(sortSides);
  return ((sortSides[0] * sortSides[0]) + (sortSides[1] * sortSides[1]) < (sortSides[2] * sortSides[2]));
   //using the newly sorted array to input into formula and check if triangle is obtuse
};

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function() {
  let array = Object.values(cartForParty);
  //creating array from object list
  let numbers = array.map(Number) //converting array to numbers from strings
  let total = 0; //store result fron loop
  for (i = 0; i < numbers.length; i++) {
      total = total + numbers[i]; //numbers[index number]
  } return total; //looping above to get total
};

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


const validator = function (cardNum) { //need to revise this later John's version


  // replace dashes with empty string
  cardNum = cardNum.replace(/-/g, "");

  // check if length is 16. if not - reject
  if (cardNum.length !== 16) {
    return false;
  }

  // if the card number is NOT a number - reject
  if ( isNaN(cardNum)) {
    return false;
  }

  // if the last digit is not even - reject
  if ( +(cardNum[15]) %2 !== 0 ) {
    return false;
  }

  // calculate the sum of the digits
  const arr = cardNum.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  // if the sum of the figits is not grester than 16 - reject
  if (sum < 17) {
    return false;
  }

  // if all chars are the same - reject
  let areTheyAllTheSame = true
  for (var i = 0; i < cardNum.length; i++) {
    if ( cardNum[i] !== cardNum[0] ) {
      areTheyAllTheSame = false
    }
  }
  if (areTheyAllTheSame === true) {
    return false
  }

  return true
}

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
  console.log(testCases[i], validator(testCases[i]))
}

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

//create a bank that holds an array of accounts that all share a set of common functionality
let bank = [
  {
    currentBalance: 1000,
    ownersName: "Shelley"
  },

  {
    currentBalance: 2000,
    ownersName: "David"
  },

  {
    currentBalance: 80.25,
    ownersName: "Idiot"
  }
];

//create a function that goes loops the array and adds all currentBalance together which will equal to total sum of money in the accounts

const totalSum = function(arr) {
  let total = 0; //create variable to store the result from the loop
    for (i = 0; i < arr.length; i++) { // i whole object bank
      total = total + arr[i].currentBalance; //reference property in object i using dot notation
    } return total
};

let newAccount = {
  currentBalance: 5000,
  ownersName: "Sonia"
}

let addAccount = function(newAccount) {
  bank.push(newAccount);
  return bank;
}

//

const withdrawAccount = function(name, money) {
   let newBalance = bank.currentBalance + money;
   return
}



const depositAccount = function() {name, money}
