console.log("connected");

// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//
// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
//
// Index	0	 1	 2	 3	 4
// Value	7	 9	11	13	15
// Below we will take their corresponding indices and add them.
//
// 7 + 13 = 20 => Indices 0 + 3 = 3
// 9 + 11 = 20 => Indices 1 + 2 = 3
// 3 + 3 = 6 => Return 6


const pairwise = ( inputArray, arg ) => {
  let result = 0
  arr  = inputArray.slice()

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 1; j < arr.length; j++) {
      if ( (arr[i] + arr[j]) === arg && (i !== j) ) {
        // console.log("we have a match", i, j);
        result +=  i + j
        arr[i] = "";
        arr[j] = "";
        // console.log(arr);
      }
    }
  }


  return result
}


console.log(pairwise([7, 9, 11, 13, 15], 20)); // => 6
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // => 11
console.log(pairwise([1, 3, 2, 4], 4)); // => 1
console.log(pairwise([1, 1, 1], 2)); // => 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // => 10
console.log(pairwise([], 100)); // => 0




// and below are some other ways of doing it.


////////////////////////////////////////////////////////
// Option 2

// const pairwise = function(arr, arg) {
//   // Create empty array to keep the arrays we will add.
//   let index = [];
//
//   // Loop to check the first number.
//   for (let a in arr) {
//     // temporal first number.
//     let temp = arr[a];
//
//     // Second loop to check against the first number.
//     for (let i = 1; i < arr.length; i++) {
//       // temporal second number.
//       let temp2 = arr[i];
//
//       // Key element, this check to make sure that the numbers add to arg
//       // also that the second index is greater than the first, and that neither
//       // of those indices are already on the array.
//       if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
//         // if true then add both indices as integers then stop checking to avoid repeats.
//         index.push(+a, +i);
//         break;
//       }
//     }
//   }
//
//   // After the two loops are done, check if index is empty to return 0
//   // or if it is not, then use Array.reduce(callbackFunc) to return the sum
//   // of the numbers.
//   if (index.length >= 1) {
//     let addAll = function(a, b) {
//       return a + b;
//     };
//
//     return index.reduce(addAll);
//   } else
//       return 0;
// }


////////////////////////////////////////////////////////
// Option 3

// const pairwise = function(arr, arg) {
//   // search array for elements that when paired, equal the second argument, then sum their indices
//   // make a local copy of the arguments object so we don't modify it directly
//   let pairArr = arr.slice();
//   return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
//       let search = arg - b; // get difference of current item so we know what value will sum to arg
//
//       // check if search value in rest of the array, but also make sure it doesn't match current search index
//       if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){
//          let total = index + pairArr.indexOf(search);  // if found, add to the runnning total
//          pairArr.splice(index,1,NaN); // remove current index from the array
//          pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
//          return a + total; //return the running total back to reduce for next item
//       }
//       return a; // simply return previous total if no operations needed
//   },0);
// }
