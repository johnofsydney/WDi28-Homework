const squareNumber = function(number) {
  const result = number ** 2;
  console.log(`The result of squaring the number ${number} is ${result}`);
  return result;
};

squareNumber(5);

const halfNumber = function(number) {
  const result = number / 2;
  console.log(`Half of ${number} is ${result}`);
  return result;
};

halfNumber(50);

const percentOf = function(number1, number2) {
  const result = number1 / number2;
  const percent = result * 100;
  console.log(`${number1} is ${percent}% of ${number2}`);
  return result;
};

percentOf(4,20);

const areaOfCircle = function(radius) {
  const result = Math.round(Math.PI * radius ** 2);
  console.log(`The area for a circle with radius ${radius} is ${result}`);
  return result;
};

areaOfCircle(2);

const p2 = function(number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percent = percentOf(square, area);
<<<<<<< HEAD
};

p2(4);
=======
}; //

p2(4); //purpose - calling a function within a function
>>>>>>> ac228c35c0a230efef84c409ab3163c93a28398b
