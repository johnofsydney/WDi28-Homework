// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const globalRectangle = {
  length: 4,
  width:5
};

const calculation = function (rectangle) {
  const isSquare = (rectangle.length === rectangle.width);
  const area = (rectangle.length * rectangle.width) ;
  const perimeter = 2 * (rectangle.length + rectangle.width);
  if(!isSquare) {
    return `area: ${area} perimeter: ${perimeter}`

  } else {
    return 'Not a rectangle';

  }

}

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 5,
  sideB: 4,
  sideC: 5
};

// const triCalc = function (object){
//   const isEquilateral = (object.sideA === object.sideB === object.sideC);
//   const isIsosceles = ();
//   const isObtuse = (object.sideA !== object.sideB !== object.sideC);
//   const area =
// }
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and
// prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const card = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = function (obj) {
  const objectArray = Object.values(obj);
  let sum =0
  for(let i=0; i<objectArray.length; i++){
    sum = sum + +(objectArray[i])
  }
  return sum;
};


// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard that returns true or false.
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

const validateCreditCard = function (cc) {
  const newCc = cc.split('-').join('')
  const finalNumber = newCc.endsWith(cc);
  const isInt = new RegExp('^[0-9]+$');
  if (newCc.length === 16  && finalNumber % 2 === 0 && isInt.exec(newCc)){
    return true;
  }else {
    return false;
  }
}


// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities
// that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total
// sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and
// add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
const bank = []

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to
// change the balance.
const addAccount = function(currentBal, ownerName){
  const account =  {currentBal: currentBal, ownerName: ownerName}
  const add = bank.push(account);
  return add;
}

const checkBal = function(array) {
  let counter = 0
for(let i=0 ; i<bank.length ; i++) {
  counter += array[i].currentBal;
}
return counter;
}

//
// There is no need to write a user interface. Make sure functions return values -- you may also have your
// functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do
// indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show
// the new total balance.
