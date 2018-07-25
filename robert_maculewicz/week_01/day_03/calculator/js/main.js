//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


  const squareNumber = function(number){
   const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}`)
     return result;
  }
       squareNumber(3);



//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

  const halfNumber = function(number){
   const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
     return result;
  }
       halfNumber(7);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

  const percentOf = function(num1, num2){
   const result = num1 / num2 * 100;
    console.log(`${num1} is ${num2} % of ${result}`);
     return result;
  }
      percentOf(5, 50);


//  Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  const areaOfCircle = function(radius){
   const area = Math.PI * radius * radius;
    console.log(`The area for cicle with ${radius} is ${area.toFixed(2)}`);
    // console.log(msg);
      return area;
}
areaOfCircle(2);


//PART 2

  const newCalculate = function(number){
   const half = halfNumber(number);
    const square = squareNumber(half);
     const area = areaOfCircle(square);
      const percent = percentOf(area.toFixed(2), square);
   }
newCalculate(10);
