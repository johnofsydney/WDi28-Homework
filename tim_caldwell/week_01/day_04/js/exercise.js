// Exercises: Arrays
// Working with Arrays

let rainbowColors = []; // Starting with an empty array called rainbowColors:

rainbowColors.push( "orange" ); // Add "orange" to the end of the array
rainbowColors.unshift( "red"   ); // Add "red" to the start of the array
rainbowColors.push( "yellow" ); // Add "yellow" to the end
rainbowColors.push( "green", "blue", "indigo", "violet" ); // Add "green", "blue", "indigo", and "violet" to the end of the array
// ^^ Try and do this using one method

rainbowColors.length  // Log out the length of the array
rainbowColors[1];  // Log out the second item
rainbowColors[ rainbowColors.length - 1 ];  // Log out the last item (make this flexible/dynamic!)

// Log out the index of the string "blue"
for ( let i = 0; i < rainbowColors.length; i++ ) {
  if (rainbowColors[i].toLowerCase() === "blue") {
    console.log( i ); // write it to console.
  }
}

// Bonus: Find out the difference between .slice and .splice
/*
  array.slice modifies the original array and retuns the removed items in a new array
  array.splice returns a new array with the spliced items and leaves the original array intact
*/
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
let twoColors = rainbowColors.splice(1,3);

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
let nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.slice(2,6)

// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log( arrOfArrs[0][0] )// Access "inner array first item" and print it out"

// Print "third" by using a dynamic index
arrOuterLastIndex = arrOfArrs.length  - 1;
arrInnerLastIndex = arrOfArrs[ arrOuterLastIndex ].length - 1;
console.log ( arrOfArrs[ arrOuterLastIndex ][ arrInnerLastIndex ]);

// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
for ( let i = 0; i <= arrInnerLastIndex; i++ ) {
  console.log( arrOfArrs[ arrOuterLastIndex ][ i ] );
}

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
let topFiveDogs = [ 'Greyhound', 'Shitzu', 'Blue Cattle Dog', 'Corgy', 'Mastiff'  ];

// For each choice, log to the screen a string like: "My #1 choice is blue."
for (let i = 0; i < topFiveDogs.length; i++ ) {
  console.log( `My #${i} choice of dog breeds is ${ topFiveDogs[i] }`);
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
for (let i = 0; i < topFiveDogs.length; i++ ) {
  let sfx;
  switch (i) {
    case 1:
      sfx = 'st'
      break;
    case 2:
      sfx = 'nd'
      break;
    case 3:
      sfx = 'rd'
      break;
    default:
      sfx = 'th'
  }
  console.log( `My ${i}${sfx} choice of dog breeds is ${ topFiveDogs[i] }` );
}
