/*Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
"The result of squaring the number 3 is 9." */

function squareNumber(num) {
  const res = num * num;
  console.log('The result of squaring the number ' + num + ' is' + res);
  return res;
}


function halfNumber(num) {
  const res = num / 2;
  console.log('Half of ' + num + ' is ' + res);
  return res;
}

function percentOf(num1, num2) {
  const res = (num1 / num2) * 100;
  console.log(num1 + ' is ' + res + '%' + ' of ' + num2);
  return res;
}

function areaOfCircle(radius) {
  const res = (3.14 * radius ** 2).toFixed(2);
  console.log('The area for a circle with radius ' + radius + ' is ' + res);
  return res;
}


/*squareNumber(2);
halfNumber(8);
percentOf(4, 8);
areaOfCircle(5);*/
