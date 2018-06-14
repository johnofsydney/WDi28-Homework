// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


const squareNumber = function (number) {
  const squared = number * number;
  console.log(`The result of suaring the number ${number} is ${squared}.`);
  return squared;
}

squareNumber(55);

//halfed number
const halfNumber = function (number) {
  const halfed = number / 2;
  console.log(`Half of ${number} is ${halfed}`);
  return halfed;
}

halfNumber(787);

//Percent of
const percentOf = function (num1, num2) {
  const percent = (num1 / num2) *100;
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}

percentOf(2,4);

//area of Circle
const areaOfCircle = function (radius) {
  let area = Math.PI * (radius * radius);
  area = area.toFixed(2);
  console.log(`The area of a circle with a radius of ${radius} is ${area}`);
  return area;
}

areaOfCircle(3);

//Part two
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const oneNumber = function (number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circle = areaOfCircle(square);
  const percentage = percentOf(circle, square);

}
