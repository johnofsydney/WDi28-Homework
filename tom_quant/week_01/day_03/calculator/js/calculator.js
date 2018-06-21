const squareNumber = function(number) {
  const answ = number * number
  console.log(`The result of squaring the number ${number} is ${answ}`)
  return answ
}

const halfNumber = function(number) {
  const answ = number / 2
  console.log(`half of ${number} is ${answ}`)
  return answ
}
 const percentOf = function(num1, num2) {
   const answ = (num1 / num2) * 100
   answRounded = (Math.round(answ * 100) / 100)
   console.log(`${num1} is ${answRounded}% of ${num2}`)
   return answRounded
 }

const areaOfCircle = function(radius) {
  const answ = Math.PI * radius * radius
  const answRounded = (Math.round(answ * 100) / 100)
  console.log(`the area of a circle with radius ${radius} is ${answRounded}`)
  return answRounded
}

const calculator = function(num) {
  const halfNum = halfNumber(num)
  const squared = squareNumber(halfNum)
  const circleArea = areaOfCircle(squared)
  const percent = percentOf(circleArea, squared)


  return percent
}
