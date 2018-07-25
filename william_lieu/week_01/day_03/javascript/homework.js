//Part1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


// const squareNumber =`The result of squaring the number 3 is 9`;
// console.log(6);


const squareNumber = function(num) {
  const result = num ** 2;
  console.log(`The result of the squaring number ${ num } is ${ result }`);
  return result;
};

let a = squareNumber(5);
console.log(a);


const squareNumber = function(num) {
  const numsqrd = num * num;














//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num) {
  const result = num / 2;
  console.log(`Half of ${ num } is ${ result }`);
  return result;
}

let b = halfNumber(5);
console.log(b);



//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const result = (num1 / num2) * 100;
  console.log(`${ num2 } is ${ result }% of ${ num1 }`);
  return result;
}


//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
  const diameter = radius * 2;
  const area = diameter * Math.PI;
  const round = Math.ceil( area );
  console.log(`The area for a circle with radius ${ radius } is ${ area }.`);
  return area;
}

areaOfCircle(2);

//Part2

//Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//Take half of the number and store the result.
//Square the result of #1 and store that result.
//Calculate the area of a circle with the result of #2 as the radius.
//Calculate what percentage that area is of the squared result (#3).

const calculate = function ( num ) {

  const halfNumber = halfNumber (halfnum);
  const squareNumber = squareNumber (num);
  const circle = areaOfCircle (num);
  const areasquarcircle =
}

//DrEvil
//Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//  DrEvil(10): 10 dollars
//DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(number) {
  if (number < 1000000) {
    return ' DrEvil ' +  number  + ' dollars ';
}  else {
    return ' DrEvil ' +  number  + ' dollars (pinky)';
  }
};

DrEvil(10);
DrEvil(1000000);


const DrEvil = function(number) {
  let msg = amount + ' dollars'
  if ( amount === 1000000)
  msg += "(pinky')";

  return msg;

};


//MixUp
//Create a function called mixUp. It should take in two strings, and return the //concatenation of the two strings (separated by a space) slicing out and //swapping the first 2 characters of each. You can assume that the strings are at //least 2 characters long. For example:

//  mixUp('mix', 'pod'): 'pox mid'
//  mixUp('dog', 'dinner'): 'dig donner'
//Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function () {
  const string1 = " ";
  const string2 = " ";
  console.log(string1.concat(" ",string2));
  const result = mixUp.slice(1);
  console.log( result );

  return mixUp('', '')

}
;





/*FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/

const fixStart = function (stringFix)
{
  let output = stringFix[0]

  for(var i = 1; i < stringFix.length; i++)
  {
    if(stringFix[i] === stringFix[0])
    output += "*";
    else
    output += stringFix[i];
  }
  return output;
};






/*Verbing
Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/
