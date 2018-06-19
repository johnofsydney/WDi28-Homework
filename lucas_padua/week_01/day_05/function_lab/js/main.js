console.log(`Hello Lucas!!!`);

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
//  };



const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function(){
if (rectangleA.length === rectangleA.width) {
  return true;
}else{
    return false;
  }
};
console.log(isSquare(rectangleA));

////////////////

const area = function(){
return rectangleA.length * rectangleA.width
};
console.log(area(rectangleA));

//////////////////////


const perimeter = function(){
  return (rectangleA.length *2 ) * rectangleA.width
}
console.log(perimeter(rectangleA))

///////////////////////////////////

// //
// // Part 2, Triangle
// // Given the following a triangle object like the one below, write the following functions:
// //
// // isEquilateral - Returns whether the triangle is equilateral or not
// // isIsosceles - Returns whether the triangle is isosceles or not
// // area - Returns the area of the Triangle
// // isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(){
  if ((triangleA.sideA + triangleA.sideB) === (triangleA.sideC * 2)){
    return true;
  }else{
    return false;
  }
};
console.log(isEquilateral(triangleA))

////////


const isIsosceles = function (){
  if (triangleA.sideA === triangleA.sideB || triangleA.sideA === triangleA.sideC || triangleA.sideB === triangleA.sideC) {
    return true;
  } else {
    return false;
  }
};
console.log(isIsosceles(triangleA))
/////////////

const triangleS = (triangleA.sideA + triangleA.sideB + triangleA.sideC )/2;
const triangleU = Math.sqrt(triangleS * (triangleS - triangleA.sideA)*(triangleS - triangleA.sideB )*(triangleS - triangleA.sideC));
console.log(`Area ${ triangleU}`);
/////////////

// const isObtuse = ( (Math.pow(triangleA.sideC)/2));
// const number4 = (Math.pow(triangleA.sideA) + Math.pow(triangleA.sideB));
// const

////////////////
