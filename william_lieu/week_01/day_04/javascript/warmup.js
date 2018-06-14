/*
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

*/

/*
function(number) {
   if (number = 3) {
     return 'Pling';
   }
  else if (number = 5) {
    return 'Plang';
  }
  else if (number = 7) {
    return 'Plong';
  }
  else if ()
}

console.log(number);
*/

const pling = function(num) {
  let result =""

  if (num % 3 === 0) {
    result = result + "Pling";
  }

  if (num % 5 === 0)  {
    result = result + "Plang";
      }
  if (num % 7 === 0) {
    result += "Plong"
  }
  return result
}
