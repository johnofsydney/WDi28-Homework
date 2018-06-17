/*The Calculator
Part 1
1 - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
2 - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
3 - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
4 - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
5 - Bonus: Round the result so there are only two digits after the decimal.
*/
/*
const calculateSupply = function (currentAge, amountPerDay) {
  const maximumAge = 55;
  const amountPerYear = amountPerDay * 365.25; // Including leap years
  const yearsRemaining = maximumAge - currentAge;
  const amountRequired = Math.ceil( amountPerYear * yearsRemaining );

  const message = `You will need ${ amountRequired } to last you until the ripe old age of ${ maximumAge }`;

  console.log(message);
  return message;
}

calculateSupply(39, 4);
calculateSupply(18, 6);
calculateSupply(50, 4);
*/

// 1 - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const numberSq = number * number; //square number calc
console.log( numberSq );
return numberSq;
}

squareNumber(3);
squareNumber(9);

//2 - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const numberHalf = number / 2; //calc half
  console.log( numberHalf );
  return numberHalf;
}

halfNumber(5);
halfNumber(2.5);


//3 - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


const percentOf = function (number1, number2) {
  const rePercent = (number1 / number2) * 100; //*calc
  console.log( rePercent );
  return rePercent;
}
percentOf(2,4);


//4 - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (number1){
  const area = Math.PI * (number1 * number1);
  console.log( area )
  return area;
}
areaOfCircle(2);

//5 - Bonus: Round the result so there are only two digits after the decimal.

const twoDo = function (number1){
  const resposta = Math.PI / number1; // calc
  return resposta.parseFloat(number1).toFixed(2);
}

/*
Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

1 - Take half of the number and store the result.
2 - Square the result of #1 and store that result.
3 - Calculate the area of a circle with the result of #2 as the radius.
4 - Calculate what percentage that area is of the squared result (#3).

*/

const secondPart1 = function (number1){
  const part1 = halfNumber(number1);
  const part2 = squareNumber(part1);
  const part3 = areaOfCircle(part2);
  const part4 = percentOf(part3);
console.log(part4);
return part4;
}

secondPart1(1);//I dont know if its correct

/*
DrEvil
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/


function drEvil(value) {
  if (value == 1000000) {
    console.log(value + ' dollars (pinky)');
  }
  else {
    console.log(value + ' dollars');
  }
}

drEvil(1000000);
/*
MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(string1, string2){
  const
}
