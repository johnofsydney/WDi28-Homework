// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width){
  return true;
  }
}

console.log( "Is it square? " + isSquare(rectangleA));

const area = function (rectangle) {
  let a = rectangle.length * rectangle.width;
  return a;
}

console.log("The area is : " + area(rectangleA));

const perimeter = function (rectangle) {
  let a = (rectangle.length * 2) + (rectangle.width * 2);
  return a;
}

console.log("The Perimeter is :" + perimeter(rectangleA));


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 4,
  sideB: 2,
  sideC: 4
};


const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}

console.log('Is the triangle an equilateral? ' + isEquilateral(triangleA))

//isIsosceles

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA) {
    return true;
  } else {
    return false;
  }
}

console.log("Is the triangle an Isosceles? " + isIsosceles(triangleA));

//area

const area2 = function (triangle) {
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  const s = ((a + b + c)/2)
  const sum = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
  return sum;
}

console.log("The area of the triangle is : " + area2(triangleA));

//obtuse

const isObtuse = function (triangle) {
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  if ( a !== b && b !== c && c !== a) {
    return true;
  } else {
    return false;
  }
}

console.log("Is the triangle Obtuse? " + isObtuse(triangleA));

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cashRegister = function (shoppingCart) {
  let val = Object.values(shoppingCart)
  let total = 0;
  for (i=0; i < val.length; i++) {
    total = total + val[i];
  }
  return total;
}

console.log("You owe me : "+cashRegister(cartForParty)+  " dollars punk");



// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

const validateCreditCard = function (cardNum) {
  let card = cardNum.replace(/-/g, "");

//if length is greater than 16
  if (card.length === 16) {
    return true;
  } else {
    return false;
  }
//is card is NaN
  if (card === NaN) {
    return false;
  }
  let array = card.split("")
  let first = array[0]

//Making sure the digits are different from each other
  for (let i = 0 ; i < array.length; i++) {
    if (array[0] !== array[i] ) {
      return true;
    }
  }
//last number is even.
  if ((card[card.length -1] % 2) !== 0 ) {
    return false;
  } else {
    return true;
  }
//sum is greater than 16
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  if (sum > 16) {
    return true;
  } else {
    return false;
  }
}

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
