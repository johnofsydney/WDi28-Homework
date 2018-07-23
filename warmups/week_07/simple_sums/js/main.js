console.log("connected");


// ## Simple Sums
//
// Back to the world of Javascript! See if you can remember how it works...
//
// Write a program that can calculate the sum of the first `n` elements of the following sequences:
//
// ```js
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// ```
// For example:
//
// ```js
// s1(4) = 0
// s2(4) = 10
// ```

const s1 = (num) => {

  // if num.even?
  // return 0
  // else
  // return 1

  return num % 2
}

console.log( s1(4) );
console.log( s1(5) );
console.log( s1(60) );


// first version - using a loop
const s2 = (num) => {
  let result = 0

  for (var i = 1; i <= num; i++) {
    result = result + i
  }

  return result
}

console.log( s2(4) );
console.log( s2(5) );
console.log( s2(60) );



// second version using ** Recursion **
const s3 = (num) => {

  // if (num > 0) {
  //   return num + ( s3( num -1) )
  // } else {
  //   return 0
  // }

  while ( num > 0 ) {
    return num + ( s3(num - 1) )
  }
  return 0
}


console.log( s3(4) );
console.log( s3(5) );
console.log( s3(60) );



// third version using ** maths **
const s4 = (num) => {
  return ( num * (num + 1)) / 2
}

console.log( s4(4) );
console.log( s4(5) );
console.log( s4(60) );
















//
// const s1 = (num) => {
//   return num % 2
// }
//
// console.log( s1(4) );
// console.log( s1(5) );
// console.log( s1(60) );
//
//
// // simple method - using a loop
// const s2 = (num) => {
//   let result = 0
//   for (var i = 1; i <= num; i++) {
//     result += i
//   }
//
//   return result;
// }
//
// console.log( s2(4) );
// console.log( s2(5) );
// console.log( s2(60) );
//
// // alternative method - using recursion
// const s3 = (num) => {
//
//   if ( num > 0 ) {
//     return num + s3( num -1 )
//   } else {
//     return 0
//   }
// }
//
// console.log( s3(4) );
// console.log( s3(5) );
// console.log( s3(60) );
//
//
// function s4(num) {
//   return ( num * (num + 1) ) / 2 ;
// }
//
// console.log( s4(4) );
// console.log( s4(5) );
// console.log( s4(60) );
