console.log(`Hello`);
/*
Exercises: Arrays
Working with Arrays
Starting with an empty array called rainbowColors:

Add "orange" to the end of the array
Add "red" to the start of the array
Add "yellow" to the end
Add "green", "blue", "indigo", and "violet" to the end of the array
Try and do this using one method
Log out the length of the array
Log out the second item
Log out the last item (make this flexible/dynamic!)
Log out the index of the string "blue"
Bonus: Find out the difference between .slice and .splice
Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
Bonus: Work with arrays of arrays
Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
Access "inner array first item" and print it out"
Print "third" by using a dynamic index
Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
Your top choices
Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/

const rainbowColors = [];
rainbowColors.push("orange");//Add "orange" to the end of the array
rainbowColors.unshift("red");//Add "red" to the start of the array
rainbowColors.push("yellow");//Add "yellow" to the end
rainbowColors.push("green", "blue", "indigo","violet");//Add "green", "blue", "indigo", and "violet" to the end of the array

console.log(rainbowColors.length);
console.log( rainbowColors[1] );
console.log( rainbowColors[rainbowColors.length-1] );
console.log(rainbowColors.indexOf ("blue"));

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3, 3);
//Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
//Access "inner array first item" and print it out"
//Print "third" by using a dynamic index
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs);
