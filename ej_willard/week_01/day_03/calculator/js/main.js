const squareNumber = function(number){
  const squareMath = number ** 2;
  const message = `The result of squaring the number ${number} is ${squareMath}.`;
  console.log(message);
  return squareMath;
};
squareNumber(2);

const halfNumber = function (number){
  const halfNumberMath = number / 2;
  const message = `Half of ${number} is ${halfNumberMath}.`;
  console.log(message);
  return halfNumberMath;
};
halfNumber(3);

const percentOf = function (num1, num2){
  const percentMath = (num1 / num2) * 100;
  const message = `${num1} is ${percentMath}% of ${num2}`;
  console.log(message);
  return percentMath;
};
percentOf (3, 9);

const areaOfCircle = function (radius) {
  const calArea = Math.round(Math.PI * radius * radius);
  const message = `The area for a circle with radius ${radius} is ${calArea}`;
  console.log(message);
  return calArea;
};
areaOfCircle(2)
//let area = areaOfCircle(2);
//console.log(area);

//PART TWO

const partTwo = function (number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percent = percentOf(square, area);
 const message = `The percentage that area is of the squared result is ${percent}%`;
  console.log(message);
};
partTwo(4);
