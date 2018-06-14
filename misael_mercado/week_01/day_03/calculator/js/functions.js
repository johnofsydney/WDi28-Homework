// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number) {
  const result = number * number;
  console.log(`The result of squaring the ${number}  is ${result}`);
  return squareNumber;
}
squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(number) {
  const result2 = number / 2;
  console.log(`Half of ${number} is ${result2}.`);
  return halfNumber;
}

halfNumber(30);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(a, b) {
  const result3 = a / b * 100;
  console.log(`${a} is ${result3} percent of ${b}`);
  return percentOf;
}

percentOf(4, 8);
percentOf(10, 100);
percentOf(45, 450);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${Math.round(area)}`)
  return areaOfCircle;

}

areaOfCircle(50);
areaOfCircle(34);
areaOfCircle(23);


// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


const total = function(number) {
  const half = number / 2;
  const square = half ** 2
  const area = Math.PI * square * square
  const percent = area / square * 100
  return percent;
}

let x = total(12);
console.log(Math.round(x));
