const squareNumber = (number) => {
  const result = number ** 2;
  console.log(`The result of squaring the number ${number} is ${result}`);
  return result
}

const halfNumber = (number) => {
  const result = number/2;
  console.log(`Half of ${number} is ${result}`);
  return result;
}

const percentOf = (number1, number2) => {
  const result = number1/number2*100;
  console.log(`${number1} is ${result}% of ${number2}.`);
  return result;
}

const areaOfCircle = (radius) => {
  let area = Math.PI*radius*radius;
  area = area.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
  return area;
}

//part 2

const questionPart2 = (number) => {
  const halfResult = halfNumber(number);
  const squareResult = squareNumber(halfResult);
  const area = areaOfCircle(squareResult);
  const result = percentOf(area, squareResult);
}
