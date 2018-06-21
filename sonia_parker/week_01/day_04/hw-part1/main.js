console.log("connected");
//Geometry Function Lab
//Rectangle
const rectangleA = {
  length: 4,
  width: 4
};
const notArectangleA = {
  length: 4,
  width: 8
};
//isSquare
const isSquare = function(obj){
  //if width is equal to length, its a isSquare
  return(obj.length===obj.width);

}
console.log(isSquare(rectangleA));
console.log(isSquare(notArectangleA));
//area
const area = function(obj){
  return obj.length * obj.width;
}
console.log(area(rectangleA));
console.log(area(notArectangleA));

//perimeter is 2(x+y)
const perimeter = function(obj){
  return 2*(obj.length + obj.width);
}
console.log(perimeter(rectangleA));
console.log(perimeter(notArectangleA));
//art 2, Triange
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 3,
  sideB: 8,
  sideC: 6
};
//isEquilateral
const isEquilateral = function(obj){
  return (obj.sideA===obj.sideB && obj.sideA===obj.sideC);
}
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));

console.log("******isIsosceles here******")
//isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(obj){
  return (obj.sideA===obj.sideB || obj.sideB===obj.sideC || obj.sideC===obj.sideA);
}
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));

//area of triangle
console.log("******area of TRiangel");

const triangleArea = function(obj){
//  let result;
const halfOfPerimeter =(obj.sideA + obj.sideB + obj.sideC)/2;
const mid_result = (halfOfPerimeter-obj.sideA)*(halfOfPerimeter-obj.sideB)*(halfOfPerimeter-obj.sideC)
const mid_result2 = mid_result*halfOfPerimeter;
const sqrt = Math.sqrt(mid_result2);
  return sqrt;//halfOfPerimeter;
}
console.log(triangleArea(triangleA));
console.log(triangleArea(triangleB));
console.log("**********cashRegister********");
//The Cash Register
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const cashRegister = function(obj){
let sum = 0;
for (let prop in obj){
//turn value of string into a float number
  let strToFloat = parseFloat(obj[prop]);
sum+=strToFloat;
  //console.log( "the value of " + prop + " is " + obj[prop] );
}
return sum;
//console.log(cartForParty);
}


console.log(cashRegister(cartForParty));
console.log("*********creditCardValidator");
//credit card validation
const validateCreditCard  = function(input){
  //first, remove all dashes from the input string
  const noDash=input.split('-').join('').split("");

  //check if length is not 16,return false
  if (noDash.length !== 16) {
    return false;
  }

  //loop over input characters in array
  for (let i = 0; i < noDash.length; i++) {
      //if current charlet not a number, we return false
      if(isNaN(noDash[i])){
        return false;
      }
  }

  //create empty array to track unique nums
  let uniqueNums = [];

  //loop over input characters in array
  for (let i = 0; i < noDash.length; i++) {

    //if current char is not in unique arr, add it there push
    if(uniqueNums.indexOf(noDash[i])===-1){
      uniqueNums.push(noDash[i]);
    }
  }

  //check if length of unique array is <2, return false
  if(uniqueNums.length<2){
    return false;
  }

  //!(arr.length-1 %2===0,(the last digit is not even) return false
  if(noDash[noDash.length-1]%2!==0){
    return false;
  }
  //loop through array and return false if the sum is less than 16
  let sumArr = 0;

  for (let i = 0; i <noDash.length; i++) {
    sumArr+=parseInt(noDash[i]);
  }

  if(sumArr<=16){
    return false;
  }

  //if nothing is false, it must be valid number, so we return true
  return true;
}
//mini-tests to check if credt card validator works
console.log("Input, Actual Result");

// this should be true
let testValue = "9999-9999-8888-0000";
console.log(testValue, validateCreditCard(testValue));
// should be false because only 15 chars
testValue = "9999-9999-8888-000";
console.log(testValue, validateCreditCard(testValue));
// false because letters
testValue = "9999-9bc9-8888-0000";
console.log(testValue, validateCreditCard(testValue));
// false because only 1 number
testValue = "9999-9999-9999-9999";
console.log(testValue, validateCreditCard(testValue));
// false because last number is odd
testValue = "9876-5432-1098-7655";
console.log(testValue, validateCreditCard(testValue));

// false because total less than 16
testValue = "1010-1010-1010-1010";
console.log(testValue, validateCreditCard(testValue));



//
