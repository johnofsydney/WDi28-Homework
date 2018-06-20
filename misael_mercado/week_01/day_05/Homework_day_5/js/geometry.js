// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
console.log("connected");

const rectangleA = {
  length: 4,
  width: 5,
};

const isSquare = function (obj) {
  if (obj.length === obj.width) {
    return true;
  } else {
    return false;
  }

};
console.log(isSquare(rectangleA));

const area = function() {
  return rectangleA.length * rectangleA.width;
};
console.log(area(rectangleA));



const perimeter = function() {
  return rectangleA.length * 2 + rectangleA.width * 2;
};
console.log(perimeter(rectangleA));


// Triangle
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

const isATriangle = function() {
  if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC) {
    return "The triangle is equilateral!";
  } else if (triangleA.sideA === triangleA.sideB || triangleA.sideA === triangleA.sideC || triangleA.sideB === triangleA.sideC) {
    return "The triangle is isosceles!";
  } else {
    return "The triangle is scalene!";
  }
};

console.log(isATriangle(triangleA));


const areaTriangle = function() {
  const p = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
  return Math.sqrt(p * (p - triangleA.sideA) * (p - triangleA.sideB) * (p - triangleA.sideC));
};

console.log(areaTriangle(triangleA));









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

const cashRegister = {

  tortilla: 12,
  tomatos: 5.5,
  onion: 4.3,
  parsley: 1.25

};

let sumReg = function() {
  let totalReg = 0;
  for (let key in cashRegister) {
    totalReg += cashRegister[key];
  }
  return totalReg;
}

console.log(`The total of your cart is ${sumReg(cashRegister)}`);


/////////you must change the index.html js link in order to see all the homework by file (js folder)///////
