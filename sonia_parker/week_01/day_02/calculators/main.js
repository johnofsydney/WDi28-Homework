//Part 1
//squareNumber
const squareNumber = function(num){
  const result = num*num;
  console.log(`the result of a squaring number ${num} is ${result}`);
  return result;
}
squareNumber(4);
squareNumber(5);
//halfNumber
const halfNumber = function(num){
const result = num/2;
console.log(`half of ${num} is ${result}`);
return result;
}
halfNumber(20);
halfNumber(100);
//percent of
const percentOf = function(num1, num2){
const result = num1/num2*100;
const roundResult = Math.round(result * 100) / 100;
console.log(`${num1} is ${roundResult} % of ${num2}`);
return roundResult;

}
percentOf(34, 70);
percentOf(10, 20);
//area of Circle
const areaOfCircle = function(radius){
  const result = radius*radius*Math.PI;
  const roundResult = Math.round(result * 100) / 100;
  console.log(`The area for a circle with radius ${radius} is ${roundResult}`);
  return roundResult;
}
areaOfCircle(10);
areaOfCircle(50);
//Part 2
const functionThatDoesEverything = function(num){
  const half = halfNumber(num);
  const squareResult = squareNumber(half);
  const areaCircle = areaOfCircle(squareResult);
  const percentageAgain = percentOf(areaCircle, squareResult);
}
functionThatDoesEverything(7);
