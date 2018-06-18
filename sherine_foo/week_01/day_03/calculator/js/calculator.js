const squareNumber = function (num1) {
  const result = num1 * num1;
  console.log(`The result of squaring the number ${num1} is ${result}`);
  return result;
};

squareNumber (5);

const halfNumber = function (number) {
  const result = number / 2 ;
  console.log (`Half of ${number} is ${result}.`);
  return result;
};

halfNumber (5);

const percentOf = function (num1, num2) {
  const result = (num1/num2) * 100;
  console.log(`${num1} is ${result}% of ${num2}`);
  return result;
};

percentOf (8,4);

const areaOfCircle = function (radius) {
  const result = Math.round(2 * Math.PI * radius);
  console.log(`The are of a circle with radius ${radius} is ${result}`);
  return result;
};

areaOfCircle (4);

//Part 2

const calculatorP2 = function (num){
  let result = halfNumber(num);
  let result1 = squareNumber(result) ;
  let result2 = areaOfCircle(result1);
  let squareResult2 = squareNumber(result2);
  let result3 = percentOf(result2, squareResult2);
  console.log (result2);
  console.log (result3);
  //console.log (result1);
};

calculatorP2 (4);
