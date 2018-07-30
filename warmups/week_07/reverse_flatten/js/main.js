console.log("connected");

// Arrays - Flatten and Reverse
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.


const reverse = (input) => {
  let output = [];
  let arr = input.slice()

  while (arr.length > 0) {
    output.push( arr.pop() )
  }
  return output;
}

input = [1,2,3,4,5]
console.log( reverse(input) )


const flatten = (input, result = []) => {
  for (var i = 0; i < input.length; i++) {
    let element = input[i];

    if ( Array.isArray(element) ) {
      flatten(element, result)
    } else {
      result.push(element)
    }

  }
  return result
}

let input2 = [1,2,3,4,5, [1,2,3, [4,5,6]]]
console.log( flatten(input2) )
let input3 = [1,2,3,4,5]
console.log( flatten(input3) )
